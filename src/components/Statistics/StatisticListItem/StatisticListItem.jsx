import { ListItem, ListValue } from './StatisticListItem.styled';

export const StatisticListItem = ({ name, value }) => {
  return (
    <ListItem>
      {`${name}: `}
      <ListValue>{value}</ListValue>
    </ListItem>
  );
};
