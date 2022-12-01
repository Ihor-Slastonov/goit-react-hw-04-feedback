import PropTypes from 'prop-types';
import { Options, Option } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Options>
      {options.map(option => {
        return (
          <li key={options.indexOf(option)}>
            <Option type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Option>
          </li>
        );
      })}
    </Options>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
