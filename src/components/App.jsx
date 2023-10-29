import user from "../data/user.json"
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"

import { Profile } from "./Profile/Profile";
import { GlobalStyle } from "GlobalStyle";
import { Statistic } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile user={user}/>
      <Statistic title="Upload stats" data={data} />
      <Statistic data={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />;

      <GlobalStyle />
    </>
  );
};

