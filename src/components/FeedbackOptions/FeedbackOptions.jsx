import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((buttonOption, index) => (
        <button
          style={{
            marginLeft: '5px',
          }}
          key={index}
          onClick={() => onLeaveFeedback(buttonOption)}
        >
          {buttonOption}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};
