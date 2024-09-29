import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Planner from './Components/Planner/Planner';
import Quizes from './Components/Quizes/Quizes';
import Products from './Components/Products/Products';
import Quiz_pcos from './Components/Quiz_pcos/Quiz_pcos';
import Quiz_menupause from './Components/Quiz_menupause/Quiz_menupause';
import ProductSingle from './Components/Products/ProductSingle';
import axios from 'axios';
import Chatbot from './Components/Chatbot/Chatbot';
// import Periods from './Components/Products/Periods';

const App = () => {

  

  // async function generateAnswer () {
  //   const response = await axios({
  //     url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCRTFkXDk6HtFX_0TNzhbvujgNdTqO7MUo",
  //     method: "post",
  //     data: {"contents":[{"parts":[{"text":"Explain how AI works"}]}]}
  //   })
  //   console.log(response.data.candidates[0].content.parts[0].text);
  // }

  // generateAnswer();

  return (
    <Router>
      <div className='app_container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/planner' element={<Planner />} />
          <Route path='/quizes' element={<Quizes />} />
          <Route path='/products' element={<Products />} />
          <Route path='/Quiz_pcos' element={<Quiz_pcos/>} />
          <Route path='/Quiz_menupause' element={<Quiz_menupause/>} />
          <Route path= '/productSingle' element={<ProductSingle/>} />
          <Route path= '/chatbot' element={<Chatbot/>} />
          {/* <Route path='/Products/Periods' element={<Periods/>} /> */}
        </Routes>
        
      </div>
      
        <Footer />
    </Router>
  );
}

export default App;
