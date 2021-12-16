import { Link } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import {Nav, Button} from 'reactstrap'

function Navbar() {
  // Get the value from the context
  const { isLoggedIn, user,  logOutUser } = useContext(AuthContext);

  return (
    <Nav className="Navbar">
      <Link to="/">
        <Button>Home</Button>
      </Link>

      {isLoggedIn && user && (user.role === "admin") && (
      <Link to="/admin">
        <Button>Admin</Button>
      </Link>
        
      )}


      <div className="profile-img-cart">    
        {user &&
          <Link to={"/cartproduct"}>
            <img src="./public/21266996981638105639-128.png" alt="cart"  />
           
          </Link>
        }
      </div>

    
      <div className="profile-img-wrapper">
        {user &&
          <Link to="/profile">
            <Button>{user.name}</Button>
          </Link>
        }
      </div> 
    
      {isLoggedIn && (
        <>
          <Button onClick={logOutUser}>Logout</Button>
        </>
      )}
   
      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
      
    </Nav>
  );
}

export default Navbar;
