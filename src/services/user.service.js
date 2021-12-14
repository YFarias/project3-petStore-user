import axios from "axios";

class UserService {
    constructor (){
        
            this.api = axios.create({
              baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5004"
            });
        
            // Automatically set JWT token in the headers for every request
            this.api.interceptors.request.use((config) => {
              // Retrieve the JWT token from the local storage
              const storedToken = localStorage.getItem("authToken");
        
              if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
              }
        
              return config;
            });
    }

    //GET /api/users - all users
    allUsers = async () => {
        return this.api.get('/api/users')
    }

    // GET /api/users/current  - Update the current user 
    currentUser = async () => {
        return this.api.get(`/api/users/current`)
    }
    
   // PUT /api/users/current  - Update the current user 
    updateCurrentUser = async (requestBody) => {
        return this.api.put('/api/users/current', requestBody)
    }

    // GET /api/user/current  - Get current user information and update addCart populate
    oneUser = async () => {
        return this.api.get(`/api/user/current`)
    }
};

// Create one instance of the service
const userService = new UserService();

export default userService;