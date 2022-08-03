import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SeatPage from "./pages/SeatPage/SeatPage";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LinePage from "./pages/LinePage";

import "./style/common.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/line" element={<LinePage />} />
        <Route exact path="/seat" element={<SeatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
