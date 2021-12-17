import { useState, useEffect } from 'react';
import DeleteUserCart from '../../components/DeleteUserCart/DeleteUserCart';
import userService from '../../services/user.service';
import "./cartpage.css"

function CartPage() {
  const [userProduct, setUserProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [flag, setFlag] = useState(false);
  const [price, setPrice] = useState(0);
 
  
  console.log('userProduct',userProduct)
  
  
  const triggerCart = (flag) => {
    setFlag(!flag)
   }
    
  const getProduct = async () => {
    try {
      
      const response = await userService.oneUser()
 
      setUserProduct(response.data);
      setCart(response.data.addCart);
    

        const tot = response.data.addCart.reduce((a,b) => a + b.price, 0);
        setPrice(tot);
        console.log('prices', price );
    } catch (error) {
      console.log(error);
    }
}
  useEffect(() => {
    getProduct();

  }, [flag])

  return (
    <div className='container-payment'>





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
          
          )})
        }

        <h3>total: {price} </h3>

      </ul>
      <div className='payment-method'>
        <div class="col-md-7 col-sm-12 p-0 box">
            <div class="card rounded-0 border-0 card2" id="paypage">
                <div class="form-card">
                    <h2 id="heading2" class="text-danger">Payment Method</h2>
                    <div class="radio-group">
                        <div class='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px"/></div>
                        <div class='radio' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" width="200px" height="60px"/></div> <br/>
                    </div> <label class="pay">Name on Card</label> <input type="text" name="holdername" placeholder="John Smith"/>
                    <div class="row">
                        <div class="col-8 col-md-6"> <label class="pay">Card Number</label> <input type="text" name="cardno" id="cr_no" placeholder="0000-0000-0000-0000" minlength="19" maxlength="19"/> </div>
                        <div class="col-4 col-md-6"> <label class="pay">CVV</label> <input type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" class="placeicon" minlength="3" maxlength="3"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12"> <label class="pay">Expiration Date</label> </div>
                        <div class="col-md-12"> <input type="text" name="exp" id="exp" placeholder="MM/YY" minlength="5" maxlength="5"/> </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6"> <input type="submit" value="MAKE A PAYMENT &nbsp; &#xf178;" class="btn btn-info placeicon"/> </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>                            
                            
                       
    
  );
}

export default CartPage;

