import { useState, useEffect } from "react";
import productService from "../../services/product.service";
import { Link } from 'react-router-dom'
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";

function HomePage() {
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


  const searchFilter = (text) => {
    setProducts(
      products.filter((product) => {
        return product.title.toLowerCase().includes(text.toLowerCase());
      })
    );
  };

  const filterProduct = (char) => {
    let filteredProduct;
    if (char === "All") {
      filteredProduct = products;
    }
    else {
      filteredProduct = products.filter((oneProduct) => {
        return oneProduct.title[0].toLowerCase() === char.toLowerCase();
      })
    }

    setProducts(filteredProduct);
  }
 
  return (
    <div className="productlist">
      <div>
        <SearchBar searchFilter={searchFilter}/>
      </div>
      <div>
        <FilterBar filterProduct ={filterProduct}/>
      </div>

      
        {products.map((oneProduct) => {
            return(
              <div className="productlist card" key={oneProduct._id}>
                <img src={oneProduct.image} alt="productsimage" width="50px" />
                
                <Link to={"/productsdetails/" + oneProduct._id}>
                   
                  <h3>{oneProduct.title}</h3>
                  
                </Link>
                <h5>{oneProduct.category}</h5>
                <h5>{oneProduct.price}</h5>
              </div>
            ) 
          })
        }
     
     
    </div>

  );
}

export default HomePage;