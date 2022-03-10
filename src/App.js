import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SupermanTShirtSmall from "./SupermanTShirtSmall.js";
import SupermanTShirtMedium from "./SupermanTShirtMedium.js";
import SupermanTShirtLarge from "./SupermanTShirtLarge.js";
import SupermanTShirtXL from "./SupermanTShirtXL.js";
import SupermanTShirt2X from "./SupermanTShirt2X.js";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="small" element={<SupermanTShirtSmall/>} />
        <Route path="medium" element={<SupermanTShirtMedium/>} />
        <Route path="large" element={<SupermanTShirtLarge/>} />
        <Route path="xl" element={<SupermanTShirtXL/>} />
        <Route path="2x" element={<SupermanTShirt2X/>} />
      </Routes>
    </Router>
  );
}

export default App;
