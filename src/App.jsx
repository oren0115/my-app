import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HotOffers from "./components/HotOffers";
import ProductDetail from "./components/ProductDetail";
import NavMenu from "./components/NavMenu";
import Beauty from "./components/Beauty";
import MenShirt from "./components/MenShirt";
import WomensShoes from "./components/WomenShoes";
import MenShoes from "./components/MenShoes";
import SearchResults from "./components/ui/SearchResults";
import WomensDresses from "./components/WomenDresses";
import AllProduct from "./components/AllProduct";
import Footer from "./components/Footer";

// Login & Register
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <NavMenu />
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />

        {/* Other Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hot-offers" element={<HotOffers />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/beauty" element={<Beauty />} />
        <Route path="/category/mens-shirt" element={<MenShirt />} />
        <Route path="/category/womens-shoes" element={<WomensShoes />} />
        <Route path="/category/mens-shoes" element={<MenShoes />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/category/womens-dresses" element={<WomensDresses />} />
        <Route path="/all-products" element={<AllProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
