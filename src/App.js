import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SelectLinePage from "./pages/SelectLinePage";
import Line2Page from "./pages/Line2Page";
import SeatPage from "./pages/SeatPage";
import "./style/common.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<HomePage />} />
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
