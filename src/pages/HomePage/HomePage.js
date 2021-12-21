import { useState, useEffect } from "react";
import productService from "../../services/product.service";
import { Link } from 'react-router-dom'
import SearchBar from "../../components/SearchBar/SearchBar";
import Carousel from 'react-bootstrap/Carousel';
import AddCart from "../../components/AddCart/AddCart";

import "./homepage.css"

function HomePage() {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
    
  const getAllProducts = async () => {
    try {
      
      const productData = await productService.getAll()
      setProducts(productData.data)
      setAllProducts(productData.data)
      

    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    
    getAllProducts();
    
  },[])

  
  const searchFilter = (text) => {
    setProducts(
      allProducts.filter((product) => {
        return product.title.toLowerCase().includes(text.toLowerCase());
      })
    );
  }
  
 
  return (
    <div >

      <div>
        
        <SearchBar searchFilter={searchFilter}/>
      
      </div>

      <div className="advertisement">
          <h4 className="promotion">50% Off</h4>
          <Carousel>
                <Carousel.Item interval={1000}>
                <img
                  className="carousel"
                  src={'https://res.cloudinary.com/dk66uayoi/image/upload/v1639658770/gallery/zhklvxy7u0erqobnfy6m.jpg'}
                  alt="First slide"
                                  
                />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="carousel"
                  src={'https://res.cloudinary.com/dk66uayoi/image/upload/v1639659255/gallery/a8d0y9onmr61c6tq71ur.jpg'}
                  alt="First slide"
                                 
                />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="carousel"
                  src={'https://res.cloudinary.com/dk66uayoi/image/upload/v1639659481/gallery/axosjnjebqpxf5inextk.jpg'}
                  alt="First slide"
                     
                />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
              
          </Carousel>

          <h4 className="promotion">50% Off</h4>

 
      </div>
        <hr className="hr" />
      
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
                  <div>
                    <AddCart productId={oneProduct._id} />
                  </div>
                </div>
                
              ) 
            })
          }
        </div> 
    
     
    </div>

  );
}

export default HomePage;