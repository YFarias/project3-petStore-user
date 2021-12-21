import { useParams } from "react-router-dom";
import productService from "../../services/product.service";
import { Button } from "reactstrap";

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
                <Button type="submit">Add Cart</Button>
            </form>
       
        </div>

        
    );
}

export default AddCart;