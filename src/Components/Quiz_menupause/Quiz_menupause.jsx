import React, { useState } from 'react';

const PcosQuiz = () => {
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
      

  // State to store answers
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // Function to handle changes to answers
  const handleChange = (e, key) => {
    setAnswers({ ...answers, [key]: e.target.value });
  };

  // Function to calculate the likelihood of PCOS based on answers
  const calculateResult = () => {
    let positiveAnswers = 0;

    for (let key in answers) {
      if (answers[key] === 'yes') {
        positiveAnswers++;
      }
    }

    if (positiveAnswers >= 15) {
      setResult('High likelihood of PCOS/PCOD. Please consult a doctor.');
    } else if (positiveAnswers >= 8) {
      setResult('Moderate likelihood of PCOS/PCOD. Consider seeing a doctor for further evaluation.');
    } else {
      setResult('Low likelihood of PCOS/PCOD, but consult a healthcare professional if you have concerns.');
    }
  };

  // Function to reset the quiz
  const resetQuiz = () => {
    setAnswers({});
    setResult(null);
  };

  return (
    <div>
      <h1>Menupause Quiz</h1>
      {menopauseQuestions.map((q, index) => (
        <div key={index}>
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
        </div>
      ))}
      <button onClick={calculateResult}>Submit</button>
      <button onClick={resetQuiz}>Re-Attempt Quiz</button> {/* Reset Button */}
      {result && <p>{result}</p>}
    </div>
  );
};

export default PcosQuiz;
