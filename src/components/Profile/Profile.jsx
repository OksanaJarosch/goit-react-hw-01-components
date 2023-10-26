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
})