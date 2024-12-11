import React, { useState } from 'react';
import run from '../Gemini/gemini';
import './Chatbot.css';

const Chatbot = () => {
  const [answerText, setAnswerText] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  function formatGeminiResponse(response) {

    const responseArray = response.split("**");

           return responseArray.map((segment, index) => {
      if (index % 2 === 1) {
        return <b key={index}>{segment}</b>;
      }
      return segment;
    });
  }

  const handleSend = async () => {
    if (!answerText.trim()) return;

    setLoading(true);
    try {
        const aiResponse = await run(answerText); 
        const formattedResponse = formatGeminiResponse(aiResponse);
          setResponse(formattedResponse);
          setResult(true);
    } catch (error)   {
        setResponse('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='chatbot_container'>
      <div className="tagline">
        <h1>
          Get help from our AI for Pre-Consultation.<br />
          "Your Personal Guide to Women's Health, Anytime."
        </h1>
      </div>
      <div className="input_area">
        <input
          type="text"
          onChange={(e) => setAnswerText(e.target.value)}
          placeholder='Enter your question here'
        />
        <button onClick={handleSend}>Send</button>
      </div>
      <p className='warning_text'>Read the disclaimer carefully.</p>
      <div className="response">
        <h1 className={result ? 'notVisible' : 'need_help'}>
          Need Help? We're Here for You!
        </h1>
        {loading ? (
          <div className='loader'>
            <hr /><hr /><hr />
            Loading...
          </div>
        ) : (
          <p>{response}</p>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
