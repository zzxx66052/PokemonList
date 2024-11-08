// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 홈 페이지 */}
        <Route path="/dex" element={<Dex />} /> {/* 도감 페이지 */}
        <Route path="/dex/:pokemonId" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
