
import { useState } from "react";
import fileService from "../../services/file.service";
import productService from "../../services/product.service";
import "./AddProduct.css"
import {Button} from "reactstrap"

function AddProduct({ refreshProducts }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { title, description, imageUrl:image, category, price };

      await productService.createOne(requestBody);      

      // Reset the state
        setTitle("");
        setImage("")
        setDescription(" ");
        setCategory(" ");
        setPrice(0);
        

        refreshProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (e) => {
    try {
      
      const uploadoData = new FormData();
      uploadoData.append("image", e.target.files[0])
      const response = await fileService.uploadImage(uploadoData)
      setImage(response.data.secure_url);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="product">
     

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Price:</label>
          <input type="number" name="price" value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        

        <label>Category:</label>
        <input name="category" value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label>Image:</label>
        <input type="file" 
        onChange={handleFileUpload}
        />

      <label>Description:</label>
        <textarea name="description" value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <Button type="submit">Create Products</Button>
      </form>
    </div>
  );
}

export default AddProduct;