import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SeatPage from "./pages/SeatPage/SeatPage";

import HomePage from "../src/pages/Main/HomePage";
import LoginPage from "../src/pages/Main/LoginPage";
import RegisterPage from "../src/pages/Main/RegisterPage";
import ChargingPage from "./pages/ChargingPage";
import PayingPage from "./pages/PayingPage";
import EyeHistory from "./pages/EyeHistoryPage/EyeHistoryPage";
import SelectLinePage from "./pages/SelectLinePage";

import Line2Page from "./pages/Line2Page";

import "./style/common.scss";
import Warning from "./pages/WarningHistoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/selectline" element={<SelectLinePage />} />
        <Route exact path="/line2" element={<Line2Page />} />
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
