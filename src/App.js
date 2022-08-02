import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeatPage from "./pages/SeatPage/SeatPage";
import "./style/common.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/seat" element={<SeatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
