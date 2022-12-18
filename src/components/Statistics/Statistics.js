import React from "react";
import './Statistics.css';
import PropTypes from 'prop-types';
class Statistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            good: props.good,
            neutral: props.neutral,
            bad: props.bad,
        }
    };

    render() {
        return (
            <ul className="statisticsList">
                <li className="statisticsItem">Good:{this.state.good}</li>
                <li className="statisticsItem">Neutral:{this.state.neutral}</li>
                <li className="statisticsItem">Bad:{this.state.bad}</li>
                <li className="statisticsItem">Total:{this.props.total()}</li>
                <li className="statisticsItem">Positive feedback:{Math.round(this.props.positivePercentage())}</li>
            </ul>

        )
    }
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};
export default Statistics;