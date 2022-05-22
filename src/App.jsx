import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Checkout from "./Checkout.class";
import Detail from "./Detail";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { useCart } from "./cartContext";

export default function App() {
  const { dispatch } = useCart();
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
            <Route
              path="/checkout"
              element={<Checkout dispatch={dispatch} />}
            ></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
