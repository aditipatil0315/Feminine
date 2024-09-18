import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Page1 from './Components/Page1/Page1'
import Page2 from './Components/Page2/Page2'
import Page3 from './Components/Page3/Page3'
import Page4 from './Components/Page4/Page4'
import Footer from './Components/Footer/Footer'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Planner from './Components/Planner/Planner'
import Quizes from './Components/Quizes/Quizes'
import Products from './Components/Quizes/Quizes'




const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/> 
    },
    {
      path: '/planner',
      element: <Planner/>
    },
    {
      path: '/quizes',
      element: <Quizes/>
    },
    {
      path: '/products',
      element: <Products/>
    },
  ])


  return (
    <div className='app_container'>
      <Navbar/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Footer/>
      
    </div>
  )
}

export default App