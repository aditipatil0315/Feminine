import React, { useState } from 'react'
import run from '../Gemini/gemini'


const Chatbot = () => {
    const [answerText, setAnswerText] = useState();
    // console.log(answerText);
    const [response, setResponse] = useState();

    const gemini = async () => {
        console.log(answerText);
        console.log("loading...");
        const finalAns = await run(answerText);
        setResponse(finalAns);
        // console.log(finalAns);

    }


  return (
    <div>
        <input type="text" onChange={(e) => setAnswerText(e.target.value)}/>
        <button onClick={gemini}>generate answer</button>
        <p>{response}</p>
    </div>
  )
}

export default Chatbot