import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Home from "./Pages/Home/home";
import Product from "./Pages/Product/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
