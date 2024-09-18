import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='nav_container'>
        <div className="navbar">
            <h3>feminine.</h3>
            <div className="nav_links">
                <ul>
                    <link to ='/'> <li>Home</li> </link>
                    <link to ='/planner'> <li>Planner</li> </link>
                    <link to ='/quizes'> <li>Quizes</li> </link>
                    <link to ='/products'> <li>Products</li> </link>
                </ul>
            </div>
            <div className="btns">

            <button>SignUp</button>
            <button>LogIn</button>

            </div>
        </div>
        
    </div>
  )
}

export default Navbar