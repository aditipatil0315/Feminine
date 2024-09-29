import React, { useState } from 'react'
import run from '../Gemini/gemini'
import './Chatbot.css'


const Chatbot = () => {
    const [answerText, setAnswerText] = useState();
    // console.log(answerText);
    const [response, setResponse] = useState();

    const gemini = async () => {
        console.log(answerText);
        console.log("loading...");
        const finalAns = await run(answerText);
        setResponse(finalAns);
        console.log(finalAns);

    }


  return (
    <div className='chatbot_container'>
        <div className="tagline">

        <h1>Get help from our AI for Pre-Consultation.<br />
        "Your Personal Guide to Women's Health, Anytime."
        </h1>
        </div>
        <div className="input_area">

        <input type="text" onChange={(e) => setAnswerText(e.target.value)} placeholder='Enter your question here'/>
        <button onClick={gemini}>Send</button>
        </div>
        <p className='warning_text'>Read the disclaimer carefully.</p>
        <div className="response">
        

        <p>{response}</p>
        </div>
    </div>
  )
}

export default Chatbot