import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Page1 from './Components/Page1/Page1'
import Page2 from './Components/Page2/Page2'
import Page3 from './Components/Page3/Page3'
import Page4 from './Components/Page4/Page4'

const App = () => {
  return (
    <div className='app_container'>
      <Navbar/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      
      
    </div>
  )
}

export default App