import { useParams } from "react-router-dom";
import productService from "../../services/product.service";


function DeleteUserCart(props) {

    const handleSubmit = async (e)  => {
        try {
            e.preventDefault();
            await productService.deleteUserProduct(props.productId)
            props.triggerCart(true)


        } catch (error) {
            console.log(error)
        }
        props.triggerCart(false)
    }
   
    return (  
        <div className="deleteCart">
            <form onSubmit={handleSubmit}>
                <button type="submit">Delete</button>
            </form>
        </div>
    );
}

export default DeleteUserCart;