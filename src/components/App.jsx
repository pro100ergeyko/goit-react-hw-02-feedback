import React, { Component } from 'react';
import {
  Container,
  FeedbackTitle,
  FeedbackBtnContainer,
  StatisticsContainer,
  StatisticsTitle,
} from './Container.styled';

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

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = ({ good }) =>
    Math.round((good * 100) / this.countTotalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <FeedbackTitle>Pleese leave feedback</FeedbackTitle>
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
          <p>Total: {this.countTotalFeedback(this.state)}</p>
          <p>
            Positive feedback:{' '}
            {this.countPositiveFeedbackPercentage(this.state)}%
          </p>
        </StatisticsContainer>
      </Container>
    );
  }
}
