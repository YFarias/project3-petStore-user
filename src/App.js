import "./App.css";
import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

import IsPrivate from './components/IsPrivate/IsPrivate';
import IsAnon from "./components/IsAnon/IsAnon";
import CartPage from "./pages/CartPage/CartPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";



function App() {
  return (
    <div className="App">
     
      <Navbar />
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productsdetails/:productId" element = {  <IsPrivate> <ProductDetailsPage/> </IsPrivate> }/>
        <Route path="/profile" element={<IsPrivate> <ProfilePage /> </IsPrivate>} />

        
        <Route path="/admin" element={<IsPrivate> <AdminPage /> </IsPrivate>} />
        <Route path="/admin-edit/:productId" element={<IsPrivate> <EditProductPage /> </IsPrivate>} />
        




        <Route path ="/cartproduct/:userId" element = {<IsPrivate> <CartPage /> </IsPrivate>}/>
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
