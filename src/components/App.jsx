import React, { Component } from 'react';
import {
  Container,
  FeedbackTitle,
  FeedbackBtnContainer,
  StatisticsContainer,
  StatisticsTitle,
} from './Container.styled';

// import { Feedback } from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleLeaveNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleLeaveBedFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <FeedbackTitle>Pleese leave feedback</FeedbackTitle>
        {/* <Feedback good={good} neutral={neutral} bad={bad} /> */}
        <FeedbackBtnContainer>
          <button onClick={this.handleLeaveGoodFeedback}>Good </button>
          <button onClick={this.handleLeaveNeutralFeedback}>Neutral</button>
          <button onClick={this.handleLeaveBedFeedback}>Bad</button>
        </FeedbackBtnContainer>
        <StatisticsContainer>
          <StatisticsTitle>Statistics</StatisticsTitle>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </StatisticsContainer>
      </Container>
    );
  }
}
