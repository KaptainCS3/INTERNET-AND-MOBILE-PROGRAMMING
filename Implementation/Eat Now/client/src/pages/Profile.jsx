import React, {useContext} from "react";
import UserProfile from "../components/UserProfile";
import { UserContext } from "../hooks/UserContext";
const Profile = () => {
  const {user, setUser} = useContext(UserContext)
  return (
    <div>
      <UserProfile name={user.name} email={user.email}/>
    </div>
  );
};

export default Profile;
