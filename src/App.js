/* eslint-disable prettier/prettier */
import React from 'react';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Recommendation from './pages/Recommendation';
import Browsing from './pages/Browsing';
import Searching from './pages/Searching';
import Details from './pages/Details';
import Explore from './pages/Explore';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cari' element={<Searching />} />
          <Route path='/jelajah' element={<Browsing />} />
          <Route path='/rekomendasi' element={<Recommendation />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/jelajah/location/:lokasi' element={<Explore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
