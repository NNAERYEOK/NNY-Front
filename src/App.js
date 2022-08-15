import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/common.scss";
// Main
import HomePage from "./pages/Main/HomePage";
import LoginPage from "./pages/Main/LoginPage";
import RegisterPage from "./pages/Main/RegisterPage";
//Train
import SelectLinePage from "./pages/SelectLinePage";
import Line2Page from "./pages/Line2Page";
import SelectCarPage from "./pages/SelectCarPage";
// SeatPage
import SeatPage from "./pages/SeatPage/SeatPage";
// MyPage
import WarningPage from "./pages/WarningHistoryPage";
import ChargingPage from "./pages/ChargingPage";
import PayingPage from "./pages/PayingPage";
import ModifyPage from "./pages/ModifyPage";
// EyeHistoryPage
import EyeHistoryPage from "./pages/EyeHistoryPage/EyeHistoryPage";
// Auth
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
        <Route exact path="/selectcar" element={<SelectCarPage />} />
        <Route exact path="/seat" element={<SeatPage />} />
        <Route exact path="/charging" element={<ChargingPage />} />
        <Route exact path="/paying" element={<PayingPage />} />
        <Route exact path="/eyehistory" element={<EyeHistoryPage />} />
        <Route exact path="/warninghistory" element={<WarningPage />} />
        <Route exact path="/modifymember" element={<ModifyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
