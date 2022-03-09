import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import SupermanTShirtSmall from "./SupermanTShirtSmall.js";
import SupermanTShirtMedium from "./SupermanTshirtMedium.js";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SupermanTShirtSmall/>} />
        <Route path="/small" element={<SupermanTShirtSmall/>} />
        <Route path="/medium" element={<SupermanTShirtMedium/>} />
      </Routes>
    </Router>
  );
}

export default App;
