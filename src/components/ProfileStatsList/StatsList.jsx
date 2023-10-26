
export const StatsList = (({stats: {followers, views, likes}}) => {
    return (
    <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span classNAme="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span classNAme="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
    )
}) 