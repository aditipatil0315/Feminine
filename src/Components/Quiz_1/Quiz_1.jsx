import React, { useState } from 'react';

const PcosQuiz = () => {
  const questions = [
    {
      question: 'Are your periods irregular or absent?',
      key: 'irregularPeriods',
    },
    {
      question: 'Do you experience excessive hair growth on your face, chest, or body (hirsutism)?',
      key: 'hairGrowth',
    },
    {
      question: 'Have you noticed severe acne on your face, chest, or back?',
      key: 'acne',
    },
    {
      question: 'Have you experienced weight gain, especially around your abdomen?',
      key: 'weightGain',
    },
    {
      question: 'Do you have dark patches of skin on your neck or underarms?',
      key: 'skinPatches',
    },
    {
      question: 'Do you experience difficulty getting pregnant?',
      key: 'fertilityIssues',
    },
    {
      question: 'Do you have a family history of PCOS or diabetes?',
      key: 'familyHistory',
    },
    {
      question: 'Do you often feel bloated or experience abdominal discomfort during your menstrual cycle?',
      key: 'bloating',
    },
    {
      question: 'Have you experienced sudden changes in your hair texture or thinning on your scalp?',
      key: 'hairThinning',
    },
    {
      question: 'Do you experience frequent headaches or migraines, especially around your menstrual cycle?',
      key: 'headaches',
    },
    {
      question: 'Do you frequently experience mood swings, anxiety, or feelings of depression that seem linked to your menstrual cycle?',
      key: 'moodSwings',
    },
    {
      question: 'Have you noticed increased levels of stress or difficulty managing daily tasks due to physical or emotional symptoms?',
      key: 'stress',
    },
    {
      question: 'Do you struggle with self-esteem or body image due to physical changes like weight gain or skin issues?',
      key: 'selfEsteem',
    },
    {
      question: 'Have your menstrual cycles become longer or shorter over time, beyond what you would consider normal?',
      key: 'cycleLength',
    },
    {
      question: 'Do you experience heavy or prolonged bleeding during your menstrual cycle?',
      key: 'heavyBleeding',
    },
    {
      question: 'Have you experienced pelvic pain or cramps that interfere with your daily routine?',
      key: 'pelvicPain',
    },
    {
      question: 'Do you struggle with insomnia or irregular sleep patterns?',
      key: 'insomnia',
    },
    {
      question: 'Do you feel fatigued or low on energy, even after a full night’s rest?',
      key: 'fatigue',
    },
    {
      question: 'Have you noticed that certain foods trigger bloating, weight gain, or discomfort after eating?',
      key: 'foodSensitivity',
    },
    {
      question: 'Have you found it difficult to lose weight even with regular exercise and a balanced diet?',
      key: 'weightLossDifficulty',
    },
    {
      question: 'Do you experience noticeable breast tenderness or changes in breast size throughout your cycle?',
      key: 'breastTenderness',
    },
    {
      question: 'Have you noticed irregularities in your blood sugar levels, such as feeling faint, shaky, or lightheaded between meals?',
      key: 'bloodSugar',
    },
    {
      question: 'Do you experience low libido or discomfort during sexual activity?',
      key: 'libidoIssues',
    },
    {
      question: 'Have you noticed vaginal dryness or other changes in your reproductive health?',
      key: 'vaginalDryness',
    },
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
      <h1>PCOS/PCOD Quiz</h1>
      {questions.map((q, index) => (
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
