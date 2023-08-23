import React from 'react';
import {
  FeedbackContainer,
  FeedbackTitle,
  FeedbackBtnContainer,
} from './Feedback.styled';

export const Feedback = () => {
  return (
    <FeedbackContainer>
      <FeedbackTitle>Pleese leave feedback</FeedbackTitle>
      <FeedbackBtnContainer>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </FeedbackBtnContainer>
    </FeedbackContainer>
  );
};
