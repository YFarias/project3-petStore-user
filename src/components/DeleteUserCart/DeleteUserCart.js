import { useParams } from "react-router-dom";
import productService from "../../services/product.service";


function DeleteUserCart() {
   
   const {productId } = useParams();
    console.log('addcart productid', productId)
    
    const handleSubmit = async (e)  => {
        try {
            e.preventDefault();
            await productService.deleteUserProduct(productId)
        } catch (error) {
            console.log(error)
        }
    }
   
    return (  
        <div className="AddCart">
            <form onSubmit={handleSubmit}>
                <button type="submit">Delete</button>
            </form>
        </div>
    );
}

export default DeleteUserCart;