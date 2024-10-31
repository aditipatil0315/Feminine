import React from 'react'
import './Page4.css'
import Workout from '../../assets/Workout.png'
import { useNavigate } from 'react-router-dom'




const Page4 = () => {
const navigate = useNavigate()

  return (
    <div className='page4_container'>
        <div className="page4">
            <div className="page4_left">
                <h3>Your Destination for Women's Health Essentials – Trusted Products for Every Stage and Need.</h3>
                <p>"Find Everything You Need for Women's Health – Care, Comfort, and Confidence in One Place."</p>
                <button onClick={() => navigate('/products')} >Explore</button>
            </div>
            <div className="page4_right">
                <img src={Workout} alt="" />
                
            </div>
        </div>
    </div>
  )
}

export default Page4
