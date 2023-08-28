import { StatisticListItem } from '../Statistics/StatisticListItem/StatisticListItem';
import { StatisticsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticListItem name="good" value={good} />
      <StatisticListItem name="neutral" value={neutral} />
      <StatisticListItem name="bad" value={bad} />
      <StatisticListItem name="total" value={total} />
      <StatisticListItem name="positive feedback" value={positivePercentage} />
    </StatisticsList>
  );
};
