import React from 'react'
import './Page4.css'
import Workout from '../../assets/Workout.png'



const Page4 = () => {
  return (
    <div className='page4_container'>
        <div className="page4">
            <div className="page4_left">
                <h3>Empower Your Strength: <br />Personalized Exercise Plans <br />for Women's Wellness</h3>
                <p>"Receive a personalized exercise plan designed to strengthen and revitalize your body, specifically tailored for women's health."</p>
                <button>Explore</button>
            </div>
            <div className="page4_right">
                <img src={Workout} alt="" />
                
            </div>
        </div>
    </div>
  )
}

export default Page4
