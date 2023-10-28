import { Friend } from "./FriendListItem.styled"


export const FriendListItem = ({ isOnline, url, name}) => {
    return (
        <Friend>
        <span></span>
        <img src={url} alt="User avatar" width="48" />
        <p>{name}</p>
      </Friend>
    )
}