import { FeedbackItem, FeedbackButton } from './FeedbackButtonListItem.styled';

export const FeedbackButtonListItem = ({ buttonText, onLeaveFeedback }) => {
  return (
    <FeedbackItem>
      <FeedbackButton id={buttonText} onClick={onLeaveFeedback}>
        {buttonText}
      </FeedbackButton>
    </FeedbackItem>
  );
};
