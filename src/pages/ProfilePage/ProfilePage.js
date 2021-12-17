import ProfileEdit from "../../components/ProfileEdit/ProfileEdit";
import "../../components/ProfileEdit/profileedit.css"

 function ProfilePage() {
  
  
  return (
    <div className="profile">
      <h1>Profile</h1>
      <ProfileEdit/>
    </div>
  );
}

export default ProfilePage;