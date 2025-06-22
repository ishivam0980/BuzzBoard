
import './App.css';
import Navbar from './components/Navbar.js';
import Category from './components/Category.js';
import Home from './components/Home.js';
import {useRef,React} from 'react';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const loadingBarRef = useRef(null);
  return (
    <div className="App">
      <LoadingBar 
        color="#007bff"
        ref={loadingBarRef}
        height={3}
        shadow={true}
      />
      <Router>        
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home loadingBarRef={loadingBarRef} />} />
        <Route exact path="/entertainment" element={<Category loadingBarRef={loadingBarRef} category="entertainment"/>} />
        <Route exact path="/sports" element={<Category loadingBarRef={loadingBarRef} category="sports"/>} />
        <Route exact path="/technology" element={<Category loadingBarRef={loadingBarRef} category="technology"/>} />
        <Route exact path="/politics" element={<Category loadingBarRef={loadingBarRef} category="politics"/>} />
        <Route exact path="/world" element={<Category loadingBarRef={loadingBarRef} category="world"/>} />
        <Route exact path="/other" element={<Category loadingBarRef={loadingBarRef} category="other"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



