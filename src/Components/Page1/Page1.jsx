import React from 'react'
import './Page1.css'
import image_1 from '../../assets/img1.png.png'

const Page1 = () => {
  return (
    <div className='Page1_container'>
        <div className="page1">
            <div className="text">
                <h2> feminine.</h2>
                <h3 className='tagline'>Where women find</h3>
                <h3 className='tagline second'> <span>Comfort.</span></h3>
                <p>Your health matters.</p>
                <p>We are here to provide <span>Care</span> and <span>Support.</span></p>
            </div>
            <div className="image">
                <img src= {image_1} alt="" />

            </div>
        </div>
        <div className="text_line">
            <h1>From your <span>  periods tips   </span> to <span>  pregnancy advice</span> </h1>
            <h1>You have our support</h1>
        </div>

        
    </div>
  )
}

export default Page1