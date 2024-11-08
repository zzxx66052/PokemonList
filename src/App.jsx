// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dex from "./Dex";
import Detail from "./Detail";

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
