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
      
      <div className="navbar-container1"> 
      
          <h2>IronPetStore</h2>

      </div>  
      
      
      <div className="navbar-container2"> 
        <div>
              <Link to="/">
                <Button color="" className="nav-links"><h6>Home</h6></Button>
              </Link>
        </div>
        <div>
            {isLoggedIn && user && (user.role === "admin") && (
            <Link to="/admin">
              <Button  color="" className="nav-links"><h6>Admin</h6></Button>
            </Link>
              
            )}
        </div>
     
        <div className="">    
          {user &&
            <Link to={"/cartproduct"}>
              <Button color="" className="nav-links"  > 
                <h6>Cart</h6>
              </Button>
            </Link>
          }
        </div>

        <div className="">
          {user &&
            <Link to="/profile">
              <Button color="" className="nav-links" > <h6>Profile</h6> </Button>{''}
            </Link>
          }
        </div> 
        
          {isLoggedIn && (
            <>
              <Button  color="" className="nav-links" onClick={logOutUser}> <h6>Logout</h6> </Button>
            </>
          )}
      
          {!isLoggedIn && (
            <>
              <Link to="/signup">
                <Button color="" className="nav-links"  >Sign Up</Button>
              </Link>

              <Link to="/login">
                <Button color="" className="nav-links"  >Login</Button>
              </Link>
            </>
          )}
      </div>
    </Nav>
  );
}

export default Navbar;
