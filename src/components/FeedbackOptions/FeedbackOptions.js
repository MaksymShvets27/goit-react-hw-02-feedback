import './FeedbackOptions.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({
    options,
    type = 'button',
    onLeaveFeedback,
}) => {
    return (
        < div className="buttonsSet">
            {options.map(btnLabel => (
                <button
                    className="statisticsButton"
                    key={btnLabel}
                    type={type}
                    onClick={() => onLeaveFeedback(btnLabel)}
                >
                    {btnLabel}
                </button>
            ))}
        </div>
    )
};
FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.string.isRequired,
        neutral: PropTypes.string.isRequired,
        bad: PropTypes.string.isRequired,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;