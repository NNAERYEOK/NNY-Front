import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LinePage from "./pages/LinePage";
import Home from "./pages/Home";
import SeatPage from "./pages/SeatPage";
import "./style/common.scss";

function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/line" element={<LinePage />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/seat" element={<SeatPage />} />

      </Routes>
    </Router>
  );
}

export default App;
