import PropTypes from 'prop-types';
import { Label, Item, Stats, LabelText } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Stats>
      <Item>
        <Label>
          Good: <LabelText>{good}</LabelText>
        </Label>
      </Item>
      <Item>
        <Label>
          Neutral: <LabelText>{neutral}</LabelText>
        </Label>
      </Item>
      <Item>
        <Label>
          Bad: <LabelText>{bad}</LabelText>
        </Label>
      </Item>
      <Item>
        <Label>
          Total: <LabelText>{total}</LabelText>
        </Label>
      </Item>
      <Item>
        <Label>
          Positive feddback: <LabelText>{positivePercentage}%</LabelText>
        </Label>
      </Item>
    </Stats>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistics };
