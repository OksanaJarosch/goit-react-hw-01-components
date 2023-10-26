import PropTypes from 'prop-types';
import { StatsList } from "components/ProfileStatsList/StatsList";

export const Profile = (({user: {username, tag, location, avatar, stats}}) => {
    return (
        <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
      width="120"
      height="120"
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

<StatsList stats={stats}/>
</div>
    )
});

Profile.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    })
}