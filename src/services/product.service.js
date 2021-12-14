import axios from 'axios';

class ProductService {
  constructor() {
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

  // POST /api/products
  createOne = async (requestBody) => {
    return this.api.post('/api/products', requestBody);
  }

  // GET /api/products
  getAll = async () => {
    return this.api.get('/api/products');
  }

  // GET /api/products/:productsId
  getOne = async (id) => {
    return this.api.get(`/api/products/${id}`);
  }

  // PUT /api/products/:productsId - Edit products
  updateOne = async (id, requestBody) => {
    return this.api.put(`/api/products/${id}`, requestBody);
  }

  // DELETE /api/products/:productsId
  deleteProduct = async (id) => {
    return this.api.delete(`/api/products/${id}`);
  } 
  
  //PUT /api/product/:productId - Add cart
  updateUserCart = async (id) => {
    return this.api.put(`/api/product/${id}`)
  }

  //delete /api/product/:productId - delete product Cart
  deleteUserProduct = async (id) => {
    return this.api.delete(`/api/product/${id}`)
  }

}

// Create one instance of the service
const productService = new ProductService();

export default productService;