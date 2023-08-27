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
          <StatisticListItem name="good" value={good} />
          <StatisticListItem name="neutral" value={neutral} />
          <StatisticListItem name="bad" value={bad} />
          <StatisticListItem name="total" value={total} />
          <StatisticListItem
            name="positive feedback"
            value={positivePercentage}
          />
        </StatisticsList>
      )}
    </Section>
  );
};
