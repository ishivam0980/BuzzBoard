
import './App.css';
import Navbar from './components/Navbar.js';
import Category from './components/Category.js';
import Home from './components/Home.js';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>        
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/entertainment" element={<Category category="entertainment"/>} />
        <Route exact path="/sports" element={<Category category="sports"/>} />
        <Route exact path="/technology" element={<Category category="technology"/>} />
        <Route exact path="/politics" element={<Category category="politics"/>} />
        <Route exact path="/world" element={<Category category="world"/>} />
        <Route exact path="/other" element={<Category category="other"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



