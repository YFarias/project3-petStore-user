import { useState, useEffect } from "react";
import userService from "../../services/user.service";
import "./profileedit.css"
import {Button} from "reactstrap"

function ProfileEdit(props) {
  
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
 
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userService.oneUser()
        const oneUser = response.data;
        console.log('USERID WORK', response.data)
        setName(oneUser.name);
        setPassword(oneUser.password);
        setEmail(oneUser.email);
        if(oneUser.address) setAddress(oneUser.address);

      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { name, password, email, address };
      await userService.updateCurrentUser(requestBody)


      

    } catch (error) {
      
    }
  }
  
  return (
    <div className="profileedit">
     
      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input type="text" name="name" value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Password:</label>
        <input type="text" name="password" value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Email:</label>
        <input type="text" name="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Address:</label>
        <input type="text" name="address" value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="button-prof">

          <Button type="submit" >Submit</Button>
        </div>

      </form>
    </div>
  );
}

export default ProfileEdit;