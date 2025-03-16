import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthProvider } from "./context/authContext";

import Layout from "./components/Common/Layout";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
// import Medicine from "./components/Pages/Medicine";
import MedicineBuy from "./components/Pages/MedicineBuy";
import News from "./components/Pages/News";
import Contact from "./components/Pages/Contact";
import Login from "./components/login/login";
import ProtectedRoute from "./components/Pages/protectedRoute"; // Ensure correct path
import AdminRoute from "./components/Pages/adminProtectedRoute";
import Products from "./components/products/medicine"
import ProductDetails from "./components/products/productDetails"
import  AdminDashboard  from "./components/adminPages/AdminDashboard";
import { ManageProducts } from "./components/adminPages/ManageProducts";
import MedicineForm from "./components/adminPages/MedicineForm";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase/firebase";
// import { db } from "./firebase/firebase";

function App() {
   const [products, setProducts] = useState([]);
   console.log("products in app",products)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <AuthProvider>
     <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* User Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="buy" element={<MedicineBuy products={products}/>} />
              <Route path="news" element={<News />} />
              <Route path="contact" element={<Contact />} />
              <Route path="product" element={<Products />} />
              <Route path="product/:id" element={<ProductDetails />} />
            </Route>
          </Route>

          {/* 🔥 Admin-Only Routes */}
          <Route element={<AdminRoute />}>
            <Route element={<Layout />}>
              <Route path="admin/dashboard" element={<AdminDashboard />} />
              <Route path="admin/products" element={<ManageProducts />} />
              {/* ✅ Medicine Form Routes for Add & Edit */}
              <Route path="admin/medicine-form" element={<MedicineForm />} />
              <Route path="admin/medicine-form/:id" element={<MedicineForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
