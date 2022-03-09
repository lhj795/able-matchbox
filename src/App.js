import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import SupermanTShirtSmall from "./SupermanTShirtSmall.js";
import SupermanTShirtMedium from "./SupermanTshirtMedium.js";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SupermanTShirtSmall/>} />
        <Route path="/superman-tshirt-medium" element={<SupermanTShirtMedium/>} />
      </Routes>
    </Router>
  );
}

export default App;
