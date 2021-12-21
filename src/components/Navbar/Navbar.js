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
      
          <h2>PetStore</h2>

      </div>  
      
      
      <div className="navbar-container2"> 

      <div>
            {isLoggedIn && user && (user.role === "admin") && (
            <Link to="/admin">
              <Button  color="" className="nav-links"><h5>Admin</h5></Button>
            </Link>
              
            )}
      </div>


      <div className="">    
          {user &&
            <Link to={"/cartproduct"}>
              <Button color="" className="nav-links1"> 
                <img  src={'https://res.cloudinary.com/dk66uayoi/image/upload/v1639519650/gallery/d1qds2cangz4mjxgkxke.png'} alt="cart" width="45%" height="90%"/>
              </Button>
            </Link>
          }
        </div>

        <div>
              <Link to="/">
                <Button color="" className="nav-links1"> 
                <img  src={'https://res.cloudinary.com/dk66uayoi/image/upload/v1640121729/gallery/home-button_icon-icons.com_72700_bhv4nb.png'} alt="cart" width="45%" height="90%"/>
                </Button>
              </Link>
        </div>
       
       
     
        
        <div className="">
          {user &&
            <Link to="/profile">
              <Button color="" className="nav-links1" > <img src={'https://res.cloudinary.com/dk66uayoi/image/upload/v1640121729/gallery/4092564-about-mobile-ui-profile-ui-user-website_114033_bvvi8w.png'} alt="" width="45%" height="90%" /> </Button>
            </Link>
          }
        </div> 
        
          {isLoggedIn && (
            <>
              <Button  color="" className="nav-links1" onClick={logOutUser}> <img src={'https://res.cloudinary.com/dk66uayoi/image/upload/v1640121145/gallery/logout_icon_138409_ug236e.png'} alt="Logout"  width="45%" height="80%" /> </Button>
            </>
          )}
      
          {!isLoggedIn && (
            <>
              <Link to="/signup">
                <Button color="" className="nav-links"  ><h6>Sign Up</h6> </Button>
              </Link>

              <Link to="/login">
                <Button color="" className="nav-links" ><h6>Login</h6></Button>
              </Link>
            </>
          )}
      </div>
    </Nav>
  );
}

export default Navbar;
