import PropTypes from 'prop-types';
import { Options, Option } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  
  return (
    <Options>
      <li>
        <Option type="button" name="good" onClick={onLeaveFeedback}>
          Good
        </Option>
      </li>
      <li>
        <Option type="button" name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </Option>
      </li>
      <li>
        <Option type="button" name="bad" onClick={onLeaveFeedback}>
          Bad
        </Option>
      </li>
    </Options>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};


