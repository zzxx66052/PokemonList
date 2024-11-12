// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/PokemonDetail";
import { ToastContainer } from "react-toastify";
import { PokemonProvider } from "./context/PokemonContext";

const App = () => {
  return (
    <PokemonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* 홈 페이지 */}
          <Route path="/dex" element={<Dex />} /> {/* 도감 페이지 */}
          <Route path="/pokemon/:id" element={<Detail />} />
        </Routes>
        <ToastContainer />
      </Router>
    </PokemonProvider>
  );
};

export default App;
