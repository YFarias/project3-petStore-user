import { useState, useEffect } from "react";
import productService from "../../services/product.service";
import { Link } from 'react-router-dom'


function HomePage() {
  const [products, setProducts] = useState([])
 
  const getAllProducts = async () => {
    try {
      
      const productData = await productService.getAll()
      setProducts(productData.data)
    
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    
    getAllProducts();

  },[])
 
  return (
    <div className="productlist">
      
        {products.map((oneProduct) => {
            return(
              <div className="productlist card" key={oneProduct._id}>
                <img src={oneProduct.image} alt="productsimage" width="50px" />
                <Link to={"/productsdetails/" + oneProduct._id}>
                   
                  <h3>{oneProduct.title}</h3>
                  
                </Link>
                <h5>{oneProduct.price}</h5>
              </div>
            ) 
          })
        }
     
     
    </div>

  );
}

export default HomePage;