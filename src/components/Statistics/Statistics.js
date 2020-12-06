import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total: {total}</li>
        <li>positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveliercentage: PropTypes.number.isRequired,
};

export default Statistics;
