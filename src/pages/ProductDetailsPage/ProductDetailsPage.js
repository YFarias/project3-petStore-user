import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import AddCart from '../../components/AddCart/AddCart';
import productService from '../../services/product.service';
import "./productdetailspage.css"

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  
  const {productId } = useParams();
  
  const getProduct = async () => {
    try {
      
      const response = await productService.getOne(productId)
        
      setProduct(response.data);

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getProduct()

  },{});

  return (
    <div className="product-details">
      {product && (
        <>
          
            <div>
            <img src={product.imageUrl} alt="productimage" width="280px" />
            </div>
            <div className='box2'>
              <div>

                <h2>{product.title}</h2>

              </div>
              <div>

                <p>{product.description}</p>

                <h5>{product.price} €</h5>

              </div>
              <AddCart productId={product._id} />
            </div>
            
        </> 
         
      )}

    </div>
  );
}

export default ProductDetailsPage;