import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  stateKeys = Object.keys(this.state)
  leaveFeedback = btnState => {
    this.setState(prevState => ({ [btnState]: (prevState[btnState] += 1) }));
  };
   countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const goodPercentage = (good / this.countTotalFeedback()*100);

    if (isNaN(goodPercentage)) {
      return 0;
    }
    return Math.round(goodPercentage);
  };

  render() {
    console.log(this.stateKeys)
  return (
    <><Section title='Please leave feedback'>
      <FeedbackOptions options={this.stateKeys} onLeaveFeedback={this.leaveFeedback} />
    </Section>
      <Section title='Statistics'>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
      </Section>
    </>
  );
}
};
