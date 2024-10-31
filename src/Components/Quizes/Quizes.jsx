import React from 'react'
import Quiz_1 from '../Quiz_pcos/Quiz_pcos'
import Quiz_menupause from '../Quiz_menupause/Quiz_menupause'
import { useNavigate } from 'react-router-dom'
import './Quizes.css'


const Quizes = () => {

  const navigate = useNavigate();

  return (
    <div className='quizes_container'>
      <div className="quizes">
        <div className="card_1">
        <h5>PCOS/PCOD Quiz</h5>
        <h6>Attempt this quiz to self examinate yourself.</h6>
        <button onClick={() => navigate('/Quiz_pcos')}>Start</button>
        </div>
        <div className="card_2">
        <h5>Menupause Quiz</h5>
        <h6>Attempt this quiz to self examinate yourself.</h6>

        <button onClick={() => navigate('/Quiz_menupause')}>Start</button>
        </div>
      </div>
      <div className="end_text">

      <h3>More quizes coming soon...</h3>
      </div>
    </div>
  )
}

export default Quizes