import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Autosuggest from "./pages/Autosuggest";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import GetHelp from "./pages/GetHelp";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autosuggest" element={<Autosuggest />} />
        <Route path="/checkout/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recovery" element={<GetHelp />} />
      </Routes>
    </Router>
  );
}
