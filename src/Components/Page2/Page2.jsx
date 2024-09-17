import React from 'react'
import './Page2.css'
import image from '../../assets/img1.png.png'

const Page2 = () => {
  return (
    <div className='page2_container'>
        <div className="page2">
            <div className="page2_left">
                <h3>Get Personalized <br />pre-consultation with highly trained <br /> AI-Based chatbox</h3>
                <p>"Talk to our trusted AI chatbot for helpful, personalized advice and answers to your health questions, helping you prepare for your consultation with a doctor."</p>
                <button>Explore</button>
            </div>
            <div className="page2_right">
                <img src= {image} alt="" />
                
            </div>

        </div>
    </div>
  )
}

export default Page2