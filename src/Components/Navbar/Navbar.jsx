import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav_container'>
        <div className="navbar">
            <h3>feminine.</h3>
            <div className="nav_links">
                <ul>
                    <li>Home</li>
                    <li>Planner</li>
                    <li>Quizes</li>
                    <li>Products</li>
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