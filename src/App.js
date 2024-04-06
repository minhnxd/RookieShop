import "./App.css";
import React, { useState } from "react";
import Bar from "./components/bar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Category from "./pages/category";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Error404 from "./pages/error404";
import Search from "./pages/search";
import { Provider } from "react-redux";
import store from "./components/cart/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Bar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:cat" element={<Category />} />
            <Route path="/category/:cat/products/:id" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
