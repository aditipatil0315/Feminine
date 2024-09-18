import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Planner from './Components/Planner/Planner';
import Quizes from './Components/Quizes/Quizes';
import Products from './Components/Products/Products';

const App = () => {
  return (
    <Router>
      <div className='app_container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planner' element={<Planner />} />
          <Route path='/quizes' element={<Quizes />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        
      </div>
      
        <Footer />
    </Router>
  );
}

export default App;
