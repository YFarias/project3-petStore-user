import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fileService from "../../services/file.service";
import productService from "../../services/product.service";


function EditProductPage() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
    
  const {productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {

      const response = await productService.getOne(productId);
        
      const oneProduct = response.data;

        setTitle(oneProduct.title);
        setImageUrl(oneProduct.imageUrl);
        setDescription(oneProduct.description);
        setCategory(oneProduct.category);
        setPrice(oneProduct.price);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [productId]);

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { title, description, imageUrl, price, category };

      // const token = localStorage.getItem('authToken');      
      // await axios.put(
      //   `${API_URL}/api/projects/${projectId}`,
      //   requestBody,
      //   { headers: {Authorization: "Bearer " + token} }
      // );
      
      // or
       await productService.updateOne(productId, requestBody);

      navigate('/admin');
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (e) => {
    try {
      
      const uploadData = new FormData();
      uploadData.append("image", e.target.files[0])
      const response = await fileService.uploadImage(uploadData)
      setImageUrl(response.data.secure_url);

    } catch (error) {
      console.log(error)
    }
  }



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
    <div className="EditProjectPage">
      <h3>Edit the Product</h3>

      <form onSubmit={handleFormSubmit}>
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
        <input type="file" onChange={handleFileUpload}/>
        

        <label>Price:</label>
        <input type="number" name="price" value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
     
        <button type="submit">Update Project</button>
      </form>
      <div>
         <button onClick={deleteProject}>Delete Project</button>
      </div>
      
    </div>
  );
}

export default EditProductPage;