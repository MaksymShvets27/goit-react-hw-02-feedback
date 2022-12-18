import React from "react";
import './FeedbackOptions.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({
    options,
    type = 'button',
    onLeaveFeedback,
}) => {
    return (
        < div className="buttonsSet">
            {Object.keys(options).map(btnLabel => (
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
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;