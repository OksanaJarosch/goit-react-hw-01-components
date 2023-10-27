import PropTypes from 'prop-types';
import { StatsList } from "components/ProfileStatsList/StatsList";
import {ProfileWrapper, PersonWrapper, PhotoWrapper, PersonName, PersonData} from "./Profile.styled";

export const Profile = (({user: {username, tag, location, avatar, stats}}) => {
    return (
        <ProfileWrapper>
  <PersonWrapper>
    <PhotoWrapper>
    <img
      src={avatar}
      alt="User avatar"
      width="120"
      height="120"
    />
    </PhotoWrapper>
    <PersonName>{username}</PersonName>
    <PersonData>@{tag}</PersonData>
    <PersonData>{location}</PersonData>
  </PersonWrapper>

<StatsList stats={stats}/>
</ProfileWrapper>
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