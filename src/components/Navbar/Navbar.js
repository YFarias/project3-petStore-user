import { Link } from "react-router-dom";

import { useContext, useReducer } from "react";
import { AuthContext } from "../../context/auth.context";


function Navbar() {
  // Get the value from the context
  const { isLoggedIn, user,  logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/admin">
        <button>Admin</button>
      </Link>


      <div className="profile-img-wrapper">    
        {user &&
          <Link to={"/cartproduct"}>
            <img className="" src="" alt="Cart" />
          </Link>
        }
      </div>


      <div className="profile-img-wrapper">
        {user &&
          <Link to="/profile">
            <button>{user.name}</button>
          </Link>
        }
      </div> 
     
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
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
      
    </nav>
  );
}

export default Navbar;
