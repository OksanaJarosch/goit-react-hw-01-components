import { FriendListItem } from "components/FriendListItem/FriendListItem";


export const FriendList = ({friends})=> {
return (
    <ul>
{friends.map(({avatar, name, isOnline, id}) => (
   <FriendListItem key={id} isOnline={isOnline} url={avatar} name={name}/>
)
)}
</ul>
)
};