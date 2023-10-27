import PropTypes from 'prop-types';
import { List, StatsItem } from './StatsList.styled';

export const StatsList = (({stats: {followers, views, likes}}) => {
    return (
    <List>
    <StatsItem>
      <span>Followers</span>
      <span>{followers}</span>
    </StatsItem>
    <StatsItem>
      <span>Views</span>
      <span>{views}</span>
    </StatsItem>
    <StatsItem>
      <span>Likes</span>
      <span>{likes}</span>
    </StatsItem>
  </List>
    )
});


StatsList.propTypes = {
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
}