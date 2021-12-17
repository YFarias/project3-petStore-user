import { useState, useEffect } from "react";
import productService from "../../services/product.service";
import { Link } from 'react-router-dom'
import AddProduct from "../../components/AddProduct/AddProduct";
import "./admin.css"

function AdminPage() {
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
    <div className="admin">
    
       <div>
            <AddProduct/>

       </div>
        {products.map((oneProduct) => {
            return(
              <div className="productlist card" key={oneProduct._id}>
                <img src={oneProduct.imageUrl} alt="productsimage" width="50px" />
                <h3>{oneProduct.title}</h3>
                <h5>{oneProduct.category}</h5>
                <h5>{oneProduct.price}</h5>
                <Link to={"/admin-edit/" + oneProduct._id}>
                    <button>Edit</button>
                </Link>
                

              </div>
            ) 
          })
        }
     
     
    </div>

  );
}

export default AdminPage;