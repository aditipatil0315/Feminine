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
        <button onClick={() => navigate('/Quiz_pcos')}>Pcos Quiz</button>
        <button onClick={() => navigate('/Quiz_menupause')}>Menupause Quiz</button>
      </div>
    </div>
  )
}

export default Quizes