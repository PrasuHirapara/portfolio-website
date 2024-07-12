import React from "react";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./pages/homepage/NavBar";
import Home from "./pages/homepage";
import { setupAnimations } from './utils/setUpAnimation';

export default function App() {

  useEffect(() => {
    setupAnimations();
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}