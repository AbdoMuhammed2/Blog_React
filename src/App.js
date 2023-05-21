import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import { Container, Box } from "@material-ui/core";

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Header />
      </Box>
    </BrowserRouter>
  );
};

export default App;
