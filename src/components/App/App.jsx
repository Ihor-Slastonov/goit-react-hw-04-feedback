import { Component } from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  selectedFeedback = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = total > 0 ? (good / total) * 100 : 0;
    return Math.round(positivePercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.selectedFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export { App };
