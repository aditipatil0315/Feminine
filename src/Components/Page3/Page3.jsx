import React from 'react'
import './Page3.css'
import Food from '../../assets/food.png'


const Page3 = () => {
  return (
    <div className='page3_container'>
        <div className="page3">
            <div className="page3_left">
                <img src={Food} alt="" />
            </div>
            <div className="page3_right">
                <h3>Planned <br />diet with tracked <br /> Nutrients to replenish your body.</h3>
                <p>"Receive a personalized diet plan with carefully tracked nutrients to help nourish and restore your body."</p>
                <button>Explore</button>
            </div>
        </div>
    </div>
  )
}

export default Page3
