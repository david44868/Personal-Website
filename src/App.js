import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Profile from './components/Profile';
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div id="background">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <footer>© 2023 David Harianto</footer>
    </Router>
  );
}

export default App;
