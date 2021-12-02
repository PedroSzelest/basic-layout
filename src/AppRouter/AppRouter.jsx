import React from "react";
import { Route, Routes } from "react-router-dom";

//Components
import Home from "../components/Home/Home";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/work" element={<Work />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
