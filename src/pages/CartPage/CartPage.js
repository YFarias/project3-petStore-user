import { useState, useEffect } from 'react';
import DeleteUserCart from '../../components/DeleteUserCart/DeleteUserCart';

import userService from '../../services/user.service';


function CartPage() {
  const [userProduct, setUserProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [flag, setFlag] = useState(false);
  
  console.log('userProduct',userProduct)
  
  
  const triggerCart = (flag) => {
    setFlag(!flag)
   }
    
  const getProduct = async () => {
    try {
      
      const response = await userService.oneUser()
 
      setUserProduct(response.data);
      setCart(response.data.addCart)
        console.log('RESPONSE',response.data )
    } catch (error) {
      console.log(error);
    }
}
  useEffect(() => {
    getProduct();

  }, [flag])

  return (
    <div className="">
      {
        cart.map((e) => {
        return (
          <div key={e._id}>
          <h5>{e.title}</h5>
         
            <DeleteUserCart productId={e._id} triggerCart={triggerCart}/>

        </div>  

        
        )
        })
      }

    </div>
  );
}

export default CartPage;

