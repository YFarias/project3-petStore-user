
import { useState } from "react";
import productService from "../../services/product.service";



function AddProduct({ refreshProducts }) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [role, setRole] = useState("");
    const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { title, description, image, category, role, price };

      // const token = localStorage.getItem('authToken');
      // await axios.post(
      //   `${API_URL}/api/projects`,
      //   requestBody,
      //   { headers: {Authorization: "Bearer " + token} }
      // );

      // or
      await productService.createOne(requestBody);      

      // Reset the state
        setTitle("");
        setImage("");
        setDescription(" ");
        setCategory(" ");
        setPrice(0);
        setRole("");

        refreshProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddProject">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea name="description" value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Category:</label>
        <input name="category" value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label>Image:</label>
        <input type="img" name="image" value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Price:</label>
        <input type="number" name="price" value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Role:</label>
        <input type="text" name="role" value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default AddProduct;