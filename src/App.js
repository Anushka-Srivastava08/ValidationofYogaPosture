import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { YogaProvider } from "./YogaContext";
import Home from "./pages/Home/Home";
import Yoga from "./pages/Yoga/Yoga";
import About from "./pages/About/About";
import Tutorials from "./pages/Tutorials/Tutorials";

import "./App.css";
import YogaCanvas from "./pages/Yoga/YogaCanvas";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <YogaProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Yoga />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/yoga" element={<YogaCanvas />} />
        </Routes>
      </Router>
    </YogaProvider>
  );
}
