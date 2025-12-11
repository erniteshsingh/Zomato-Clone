import React from "react";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Offers from "../Pages/Offers/Offers";
import Menu from "../Pages/Menu/Menu";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";

import { Route, Routes } from "react-router";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
