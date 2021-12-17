import { useState, useEffect } from "react";
import productService from "../../services/product.service";
import { Link } from 'react-router-dom'
import SearchBar from "../../components/SearchBar/SearchBar";

import "./homepage.css"
import AdvertisementBar from "../../components/AdvertisementBar/AdvertisementBar";


function HomePage() {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [imgProducts, setImgProducts] = useState([])
  
  const getAllProducts = async () => {
    try {
      
      const productData = await productService.getAll()
      setProducts(productData.data)
      setAllProducts(productData.data)
      setImgProducts(productData.data)

    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    
    getAllProducts();

  },[])

  const advertisement = () =>{
    setImgProducts(
      imgProducts.map((e) => {
        
          return e.imageUrl

      })
    )
  }


  const searchFilter = (text) => {
    setProducts(
      allProducts.filter((product) => {
        return product.title.toLowerCase().includes(text.toLowerCase());
      })
    );
  };

   
  return (
    <div >
     <div>
     
     <AdvertisementBar props={advertisement}/>

     </div>
     
     
      <div>
        <SearchBar searchFilter={searchFilter}/>
      
      </div>
    
        <div className="itens">   
          {products.map((oneProduct) => {
              return(
                <div className="box" key={oneProduct._id}>
                  <img src={oneProduct.imageUrl} alt="productsimage" width="150px" />
                  <Link to={"/productsdetails/" + oneProduct._id}>
                    <h8>{oneProduct.title}</h8>
                  </Link>
                  <p>{oneProduct.category}</p>
                  <h8>{oneProduct.price} €</h8>
                </div>
              ) 
            })
          }
        </div> 
    
     
    </div>

  );
}

export default HomePage;