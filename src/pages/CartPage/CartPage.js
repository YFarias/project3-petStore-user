import { useState, useEffect } from 'react';
import DeleteUserCart from '../../components/DeleteUserCart/DeleteUserCart';
import userService from '../../services/user.service';
import "./cartpage.css"

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
    <ul className="cartlist">
      {
        cart.map((e) => {
        return (
          <li className='box3'>
          
              <div key={e._id}  className='box3'>
                <div>
                  <h7>{e.title}</h7>
                </div>
                <div>
                  <h7>{e.price} €</h7>
                </div>
                <div>
                  <DeleteUserCart productId={e._id} triggerCart={triggerCart}/>

                </div>
      
              </div>
             
          </li>
        
        )
        })
      }

    </ul>
  );
}

export default CartPage;

