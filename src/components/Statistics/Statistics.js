import React from "react";
import './Statistics.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            {total() > 0 ? (
                <ul className="statisticsList">
                    <li className="statisticsItem">Good:
                        {good}
                    </li>
                    <li className="statisticsItem" >
                        Neutral:
                        {neutral}
                    </li>
                    <li className="statisticsItem">
                        Bad:
                        {bad}{' '}
                    </li>
                    <li className="statisticsItem">
                        Total:
                        {total()}{' '}
                    </li>
                    <li className="statisticsItem">
                        Positive feedback:
                        {positivePercentage()}%
                    </li>
                </ul>
            ) : (
                <p>"There is no feedback" </p>
            )}
        </>
    );
};


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;