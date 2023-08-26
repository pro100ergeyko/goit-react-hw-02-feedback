import { Section } from 'components/Section/Section';
import { StatisticListItem } from '../Statistics/StatisticListItem/StatisticListItem';
import { StatisticsList } from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Section title="Statistics">
      {!total && <Notification text="There is no feedback" />}

      {total > 0 && (
        <StatisticsList>
          <StatisticListItem name="Good" value={good} />
          <StatisticListItem name="Neutral" value={neutral} />
          <StatisticListItem name="Bad" value={bad} />
          <StatisticListItem name="Total" value={total} />
          <StatisticListItem
            name="Positive feedback"
            value={positivePercentage}
          />
        </StatisticsList>
      )}
    </Section>
  );
};
