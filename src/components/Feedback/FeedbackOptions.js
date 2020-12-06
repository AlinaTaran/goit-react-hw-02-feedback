import PropTypes from 'prop-types';

// const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
//   return (
//     <button type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
//       {feedback}
//     </button>
//   );
// };

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return options.map(option => (
//     <FeedbackBtn feedback={option} onLeaveFeedback={onLeaveFeedback} />
//   ));
// };

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
