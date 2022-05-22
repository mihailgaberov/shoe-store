import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Detail from "./Detail";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/">
              <h1>Welcome to Carved Rock Fitness</h1>
            </Route>
            <Route path="/:category" element={<Products />}></Route>
            <Route path="/:category/:id" element={<Detail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
