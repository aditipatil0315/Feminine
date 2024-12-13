import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz_menupause.css'


const PcosQuiz = () => {

  const navigate = useNavigate();

    const menopauseQuestions = [
        {
          question: 'Have your periods become less frequent or stopped altogether?',
          key: 'periodFrequency',
        },
        {
          question: 'Do you experience hot flashes or sudden feelings of warmth, especially at night?',
          key: 'hotFlashes',
        },
        {
          question: 'Do you often have trouble sleeping or experience insomnia?',
          key: 'sleepIssues',
        },
        {
          question: 'Have you noticed an increase in mood swings, irritability, or feelings of anxiety or depression?',
          key: 'moodSwings',
        },
        {
          question: 'Do you experience vaginal dryness or discomfort during sexual activity?',
          key: 'vaginalDryness',
        },
        {
          question: 'Have you noticed a decrease in your sex drive or libido?',
          key: 'lowLibido',
        },
        {
          question: 'Do you frequently experience fatigue or low energy levels throughout the day?',
          key: 'fatigue',
        },
        {
          question: 'Have you experienced sudden weight gain, particularly around your abdomen?',
          key: 'weightGain',
        },
        {
          question: 'Do you experience joint or muscle aches that weren’t common before?',
          key: 'jointPain',
        },
        {
          question: 'Have you noticed thinning hair or increased hair loss?',
          key: 'hairLoss',
        },
        {
          question: 'Do you frequently experience difficulty concentrating or remembering things (commonly called "brain fog")?',
          key: 'brainFog',
        },
        {
          question: 'Do you feel like your skin has become drier or more prone to irritation?',
          key: 'skinChanges',
        },
        {
          question: 'Have you noticed irregular heartbeat or heart palpitations?',
          key: 'heartPalpitations',
        },
        {
          question: 'Do you have more frequent or urgent trips to the bathroom (urinary urgency or frequency)?',
          key: 'urinaryFrequency',
        },
        {
          question: 'Have you noticed changes in your bone density or experienced more frequent fractures?',
          key: 'boneDensity',
        }
      ];
      

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [resultclass, setResultClass]  = useState('');


  const handleChange = (e, key) => {
    setAnswers({ ...answers, [key]: e.target.value });
  };

  const calculateResult = () => {
    let positiveAnswers = 0;

    for (let key in answers) {
      if (answers[key] === 'yes') {
        positiveAnswers++;
      }
    }

    if (positiveAnswers >= 15) {
      setResult('High likelihood of PCOS/PCOD. Please consult a doctor.');
      setResultClass('high');

    } else if (positiveAnswers >= 8) {
      setResult('Moderate likelihood of PCOS/PCOD. Consider seeing a doctor for further evaluation.');
      setResultClass('medium');

    } else {
      setResult('Low likelihood of PCOS/PCOD, but consult a healthcare professional if you have concerns.');
      setResultClass('low');

    }
  };

  // Function to reset the quiz
  const resetQuiz = () => {
    setAnswers({});
    setResult(null);
    setResultClass('');
  };

  return (
    <div className='quiz_container'>
            <button className='back' onClick={() => navigate('/Quizes')}>Back</button>

      <div className="quiz">
        <ol>

      <h1>Menupause Quiz</h1>
      {menopauseQuestions.map((q, index) => (
        <li key={index}>
          
          <p>{q.question}</p>
          
          <label>
            <input
              type="radio"
              name={q.key}
              value="yes"
              checked={answers[q.key] === 'yes'}
              onChange={(e) => handleChange(e, q.key)}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name={q.key}
              value="no"
              checked={answers[q.key] === 'no'}
              onChange={(e) => handleChange(e, q.key)}
            />
            No
          </label>
         
          

        </li>
    
    
  ))}

  </ol>
  <p><br />The quiz is done. You may submit your responses.</p>
      <div className="btns_2">

      <button onClick={calculateResult}>Submit</button>
      <button onClick={resetQuiz}>Re-Attempt Quiz</button>
      </div>
      <div className="result">

        {result &&  <p className= {`${resultclass}`} > <h3>Here's your result - </h3> <br /> {result}</p>}
      </div>

      </div>
      
      </div>

  );
};

export default PcosQuiz;
