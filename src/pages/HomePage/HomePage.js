import { useState, useEffect } from "react";
import productService from "../../services/product.service";
import { Link } from 'react-router-dom'
import SearchBar from "../../components/SearchBar/SearchBar";
import Carousel from 'react-bootstrap/Carousel';


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
      <div className="Advertisement">
          <h5 className="promotion">50% Off</h5>
          <Carousel>
                <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={'https://res.cloudinary.com/dk66uayoi/image/upload/v1639659198/gallery/evfcjfendk0gc7a8kp8k.jpg'}
                  alt="First slide"
                  width="200px"
                />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={'https://res.cloudinary.com/dk66uayoi/image/upload/v1639659255/gallery/a8d0y9onmr61c6tq71ur.jpg'}
                  alt="First slide"
                  width="200px"
                />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={'https://res.cloudinary.com/dk66uayoi/image/upload/v1639659299/gallery/a9tcjs3cw6ebpww0mgds.jpg'}
                  alt="First slide"
                  width="200px"
                />
                <Carousel.Caption>
                  
                </Carousel.Caption>
              </Carousel.Item>
              
          </Carousel>
    
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