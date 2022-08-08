import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SeatPage from "./pages/SeatPage/SeatPage";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LinePage from "./pages/LinePage";
import ChargingPage from "./pages/ChargingPage";
import PayingPage from "./pages/PayingPage";
import EyeHistory from "./pages/EyeHistoryPage/EyeHistoryPage";

import "./style/common.scss";
import Warning from "./pages/WarningHistoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/line" element={<LinePage />} />
        <Route exact path="/seat" element={<SeatPage />} />
        <Route exact path="/charging" element={<ChargingPage />} />
        <Route exact path="/paying" element={<PayingPage />} />
        <Route exact path="/eyehistory" element={<EyeHistory />} />
        <Route exact path="/warninghistory" element={<Warning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
