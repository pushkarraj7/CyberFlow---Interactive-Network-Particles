import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor";
import AllLandingPages from "./components/AllLandingPages";
import LandingPage1 from "./components/LandingPage1";
import LandingPage2 from "./components/LandingPage2";
import LandingPage3 from "./components/LandingPage3";
import LandingPage4 from "./components/LandingPage4";
import LandingPage5 from "./components/LandingPage5";
import LandingPage6 from "./components/LandingPage6";
import LandingPage7 from "./components/LandingPage7";
import LandingPage8 from "./components/LandingPage8";
import LandingPage9 from "./components/LandingPage9";
import LandingPage10 from "./components/LandingPage10";
import LandingPage11 from "./components/LandingPage11";
import LandingPage12 from "./components/LandingPage12";

function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<AllLandingPages />} />
        <Route path="/landing1" element={<LandingPage1 />} />
        <Route path="/landing2" element={<LandingPage2 />} />
        <Route path="/landing3" element={<LandingPage3 />} />
        <Route path="/landing4" element={<LandingPage4 />} />
        <Route path="/landing5" element={<LandingPage5 />} />
        <Route path="/landing6" element={<LandingPage6 />} />
        <Route path="/landing7" element={<LandingPage7 />} />
        <Route path="/landing8" element={<LandingPage8 />} />
        <Route path="/landing9" element={<LandingPage9 />} />
        <Route path="/landing10" element={<LandingPage10 />} />
        <Route path="/landing11" element={<LandingPage11 />} />
        <Route path="/landing12" element={<LandingPage12 />} />
      </Routes>
    </Router>
  );
}

export default App;
