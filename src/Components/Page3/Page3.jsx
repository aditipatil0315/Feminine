import React from 'react'
import './Page3.css'
import Food from '../../assets/food.png'
import { useNavigate } from 'react-router-dom'



const Page3 = () => {

  const navigate = useNavigate();


  return (
    <div className='page3_container'>
        <div className="page3">
            <div className="page3_left">
                <img src={Food} alt="" />
            </div>
            <div className="page3_right">
                <h3>Take Our Women's Health Quizzes to know yourself more better.</h3>
                <p>"Whether you’re exploring signs of menopause or managing PCOS/PCOD, these quizzes are a compassionate guide to help you take control of your well-being."</p>
                <button onClick={() => navigate('/quizes')}>Explore</button>
            </div>
        </div>
    </div>
  )
}

export default Page3
