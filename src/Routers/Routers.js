import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
  );
};

export default Routers;
