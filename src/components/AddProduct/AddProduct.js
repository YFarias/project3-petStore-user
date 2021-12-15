
import { useState } from "react";
import fileService from "../../services/file.service";
import productService from "../../services/product.service";



function AddProduct({ refreshProducts }) {
    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [role, setRole] = useState("");
    const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { title, description, imageURL, category, role, price };

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
        setImageURL("");
        setDescription(" ");
        setCategory(" ");
        setPrice(0);
        setRole("");

        refreshProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (e) => {
    try {
      
      const uploadoData = new FormData();
      uploadoData.append("imageURL", e.target.files(0))
      const response = await fileService.uploadImage(uploadoData)
      console.log('REsponseUpload',response)
      setImageURL(response.data.secure_url);

    } catch (error) {
      console.log(error)
    }
  }

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
        <input type="file" onChange={handleFileUpload}
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