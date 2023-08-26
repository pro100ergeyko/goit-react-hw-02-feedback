import React, { Component } from 'react';
import { Container } from './Container.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ countTotalFeedback, state } = this) => {
    const total = countTotalFeedback();

    if (total) {
      const positiveFeedback = Math.round((state.good / total) * 100);

      return `${positiveFeedback}%`;
    } else {
      return '0%';
    }
  };

  onLeaveFeedback = evt => {
    this.setState(prevState => {
      switch (evt.target.id) {
        case 'good':
          return {
            good: prevState.good + 1,
          };

        case 'neutral':
          return {
            neutral: prevState.neutral + 1,
          };

        case 'bad':
          return {
            bad: prevState.bad + 1,
          };

        default:
          return prevState;
      }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}
