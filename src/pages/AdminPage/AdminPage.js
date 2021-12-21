import { useState, useEffect } from "react";
import productService from "../../services/product.service";
import { Link } from 'react-router-dom'
import AddProduct from "../../components/AddProduct/AddProduct";
import "./admin.css"
import {Button} from "reactstrap"


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
              <div className="productform" key={oneProduct._id}>
                <img src={oneProduct.imageUrl} alt="productsimage" width="50px" />
                <h5>{oneProduct.title}</h5>
                <h6>{oneProduct.category}</h6>
                <h6>{oneProduct.price}</h6>
                <Link to={"/admin-edit/" + oneProduct._id}>
                    <Button>Edit</Button>
                </Link>
                

              </div>
            ) 
          })
        }
     
     
    </div>

  );
}

export default AdminPage;