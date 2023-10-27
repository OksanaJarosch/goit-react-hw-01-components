

export const FriendListItem = ({ isOnline, url, name}) => {
    return (
        <li>
        <span>{isOnline}</span>
        <img src={url} alt="User avatar" width="48" />
        <p>{name}</p>
      </li>
    )
}