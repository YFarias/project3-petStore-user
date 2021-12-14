import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import AddCart from '../../components/AddCart/AddCart';
import DeleteUserCart from '../../components/DeleteUserCart/DeleteUserCart';
import productService from '../../services/product.service';
import userService from '../../services/user.service';

function CartPage() {
  /*const [userProduct, setUserProduct] = useState(null);
  
    
  // Make an axios call when the component is created
  // and get the project details from the server
  // GET /api/products/:productsId
  
  const getProduct = async () => {
    try {
      
      const response = await userService.oneUser()
        
      setUserProduct(response.data);
        console.log('RESPONSE',response.data )
    } catch (error) {
      console.log(error);
    }

}

  useEffect(() => {
    getProduct();

  }, [])
*/
  return (
    <div className="Cart">
      {
        <>
            <div>
                <h1>Cart</h1>
           
            </div>
            <div>

                <DeleteUserCart/>

            </div>
            
        </> 
         
      }

    </div>
  );
}

export default CartPage;

