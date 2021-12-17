import { useParams } from "react-router-dom";
import productService from "../../services/product.service";


function AddCart(props) {
   
   
    
    const handleSubmit = async (e)  => {
        try {
            e.preventDefault();
                    
            await productService.updateUserCart(props.productId)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (  
        <div className="AddCart">
            <form onSubmit={handleSubmit}>
                <button type="submit">Add Cart</button>
            </form>
       
        </div>

        
    );
}

export default AddCart;