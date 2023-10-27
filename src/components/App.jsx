import user from "../data/user.json"
import { Profile } from "./Profile/Profile";
import { GlobalStyle } from "GlobalStyle";

export const App = () => {
  return (
    <>
      <Profile user={user}/>

      <GlobalStyle />
    </>
  );
};

