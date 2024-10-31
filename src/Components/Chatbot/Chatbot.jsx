import React, { useState } from 'react'
import run from '../Gemini/gemini'
import './Chatbot.css'


const Chatbot = () => {
    const [answerText, setAnswerText] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [result , setResult] = useState(false);
    const [showResult, setShowResult] = useState(false)
    const [resultData, setResultData] = useState("")
    



    const gemini = async () => {
        setLoading(true);
        const finalAns = await run(answerText);
        let responseArray = finalAns.split("**");
    let newResponse ;
    for(let i = 0 ; i < responseArray.length; i++){
      if ( i===0 || i%2 !== 1) {
        newResponse += responseArray[i]

      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }

    }

    let finalResponse = newResponse.split("*").join("</br>")
        setResponse(finalResponse);
        setResult(true);
        setLoading(false);
        // console.log(finalAns);

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
        <h1  className={result ? "notVisible" : "need_help" }>Need Help? We're Here for You!</h1>
          {loading ? <div className='loader'>
          <hr /><hr /><hr />
          Loading...
        </div>  : <p>{response}</p>  } 
         
        
        
        
        </div>
    </div>
  )
}

export default Chatbot











    // const delayPara = (index, next) =>{
    //     setTimeout(function (){
    //         setResultData(prev=>prev+next)
    //     }, 75*index)
    // }


    // const onSent = async (prompt) => {
    //     setResultData("")
    //     setLoading(true)
    //     setShowResult(true)
    //     setRecentPrompt(input)
    //     setInput("")
    //     const response = await run(input);
    //     let responseArray = response.split("**");
    //     let newResponse;
    //     for(let i=0; i<responseArray.length; i++){
    //         if(i===0 || i%2 !== 1){
    //             newResponse += responseArray[i];
    //         }
    //         else{
    //             newResponse += "<b>"+responseArray[i]+"</b>"
    //         }
    //     }
    //     let newResponse2 = newResponse.split("*").join("</br>")
    //     let newresponseArray = newResponse2.split(" ");
    //     delayPara(newresponseArray)
    //     }
    //     setLoading(false);
    // }