import ProfileEdit from "../../components/ProfileEdit/ProfileEdit";

import { useContext, useReducer } from "react";
import { AuthContext } from "../../context/auth.context";

 function ProfilePage() {
  const { isLoggedIn, user,  logOutUser } = useContext(AuthContext);
  
  return (
    <div>
      <h1>Profile</h1>
      <ProfileEdit props={user}/>
    </div>
  );
}

export default ProfilePage;