import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import AddCart from '../../components/AddCart/AddCart';
import productService from '../../services/product.service';

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  
  const {productId } = useParams();
  
  // Make an axios call when the component is created
  // and get the project details from the server
  // GET /api/products/:productsId
  
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

  },[]);

  return (
    <div className="ProductDetails">
      {product && (
        <>
            <div>
                <h1>{product.title}</h1>
                <img src={product.image} alt="productimage" width="150px" />
                <p>{product.description}</p>
                <h5>{product.price}</h5>

            </div>
            <div>

                <AddCart />

            </div>
            
  
        </> 
         
      )}

    </div>
  );
}

export default ProductDetailsPage;