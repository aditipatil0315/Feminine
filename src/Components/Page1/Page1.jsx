import React from 'react'
import './Page1.css'
import image_1 from '../../assets/img1.png.png'
import image_2 from '../../assets/img2.png.png'
import image_3 from '../../assets/img3.png.png'


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
            <p>from your periods tips to pregnancy advice </p>
            <p>you have our support</p>
        </div>

        
    </div>
  )
}

export default Page1