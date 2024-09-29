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
                    <Link to ='/'> <li>Home</li> </Link>
                    <Link to ='/planner'> <li>Planner</li> </Link>
                    <Link to ='/quizes'> <li>Quizes</li> </Link>
                    <Link to ='/products'> <li>Products</li> </Link>
                    <Link to ='/chatbot' > <li>Chatbot</li></Link>
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