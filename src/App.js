import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SeatPage from "./pages/SeatPage/SeatPage";

import HomePage from "./pages/Main/HomePage";
import LoginPage from "./pages/Main/LoginPage";
import RegisterPage from "./pages/Main/RegisterPage";

import SelectLinePage from "./pages/SelectLinePage";

import Line2Page from "./pages/Line2Page";

import "./style/common.scss";
import Authpage from "./pages/Authpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/test" element={<Authpage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/selectline" element={<SelectLinePage />} />
        <Route exact path="/line2" element={<Line2Page />} />
        <Route exact path="/seat" element={<SeatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
