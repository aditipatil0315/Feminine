// import React from 'react'
// import './App.css'
// import Navbar from './Components/Navbar/Navbar'

// import Footer from './Components/Footer/Footer'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './Components/Home/Home'
// import Planner from './Components/Planner/Planner'
// import Quizes from './Components/Quizes/Quizes'
// import Products from './Components/Products/Products'




// const App = () => {

//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <><Navbar/><Home/><Footer/> </>
//     },
//     {
//       path: '/planner',
//       element: (<><Navbar/><Planner/><Footer/></>)
//     },
//     {
//       path: '/quizes',
//       element: <><Navbar/><Quizes/><Footer/></>
//     },
//     {
//       path: '/products',
//       element: <><Navbar/><Products/><Footer/></>
//     },
//   ])


//   return (
//     <div className='app_container'>
//       <RouterProvider router={router} />
//       <Navbar/>
//       <Page1/>
//       <Page2/>
//       <Page3/>
//       <Page4/>
      
//     </div>
//   )
// }

// export default App


import React from 'react';
import './App.css';
import Page1 from './Components/Page1/Page1'
import Page2 from './Components/Page2/Page2'
import Page3 from './Components/Page3/Page3'
import Page4 from './Components/Page4/Page4'
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
