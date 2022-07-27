import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
