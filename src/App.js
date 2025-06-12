
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;



