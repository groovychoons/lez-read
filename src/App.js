import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Archive from "./components/Archive";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="body">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
