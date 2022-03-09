import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import SupermanTShirt from "./SupermanTShirt";
import './App.css';

function App() {
  return (
    <Router>
      <SupermanTShirt />
    </Router>
  );
}

export default App;
