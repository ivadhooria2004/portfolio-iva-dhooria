import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SpotlightBackground from "./components/SpotlightBackground";
import Home from "./pages/Home";
import YearPage from "./pages/YearPage";

function App() {
  return (
    <HashRouter>
      <SpotlightBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:year" element={<YearPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
