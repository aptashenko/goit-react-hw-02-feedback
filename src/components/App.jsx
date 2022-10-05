import React, {Component} from "react";
import Title from "./Title/Title";
import Buttons from "./Buttons/Buttons";
import Body from "./Body/Body";

class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  handleClick = (index) => {
    index === 0 && this.setState(prevState => ({ good: prevState.good += 1 }))
    index === 1 && this.setState(prevState => ({ neutral: prevState.neutral += 1 }))
    index === 2 && this.setState(prevState => ({ bad: prevState.bad += 1 }))
    this.countTotalFeedback();
  }

  countTotalFeedback = () => {
    const buttonsValues = Object.values(this.state);
    let totalValue = 0;
    buttonsValues.forEach(item => {
      totalValue += item;
    })
    return totalValue;
  }

  countPositiveFeedbackPercentage = () => {
    if (this.state.good !== 0) {
      const totalFeedBack = this.countTotalFeedback();
      let positiveFeedBack = (this.state.good / totalFeedBack) * 100;
      return positiveFeedBack.toFixed(2);
    } else {
      return 0;
    }
  }

  render() {
    const buttonsNames = Object.keys(this.state);
    const buttonsValues = Object.values(this.state);
    return (
      <>
        <Title />
        <Buttons buttonsNames={buttonsNames} buttonsValues={buttonsValues} handleClick={this.handleClick} />
        <h2>Statistics</h2>
        <Body buttonsValues={buttonsValues} buttonsNames={buttonsNames} percent={this.countPositiveFeedbackPercentage} count={this.countTotalFeedback} />
      </>
    )
  }
}

export default App;