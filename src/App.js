import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route path='homepage' element={<Homepage/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
