import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productService from "../../services/product.service";




function DeleteProduct({}) {
    
   const navigate = useNavigate

   const {productId } = useParams();
   console.log('productid', productId)
   
   const deleteProject = async () => {
        try {
    
          // const token = localStorage.getItem('authToken');      
          // axios.delete(
          //   `${API_URL}/api/projects/${projectId}`,
          //   { headers: {Authorization: `Bearer ${}`} }
          // );
    
          // or
          await productService.deleteProduct(productId);      
          
          navigate("/admin");
        } catch (error) {
          console.log(error);
        }
      };
    
    
    
    return (  
        <div>
            <button onClick={deleteProject}>Delete Project</button>
        </div>
    );
}

export default DeleteProduct;