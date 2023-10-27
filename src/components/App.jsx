import user from "../data/user.json"
import data from "../data/data.json"
import friends from "../data/friends.json"
import { Profile } from "./Profile/Profile";
import { GlobalStyle } from "GlobalStyle";
import { Statistic } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";

export const App = () => {
  return (
    <>
      <Profile user={user}/>
      <Statistic title="Upload stats" data={data}/>
      <FriendList friends={friends}/>

      <GlobalStyle />
    </>
  );
};

