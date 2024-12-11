

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_API_URL;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  export default async function run(text) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(`You are an AI gynecologist providing expert information on women's health. Respond to the user’s input with a detailed, professional, and empathetic tone. Thoroughly assess the symptoms or concerns described in the user's message:

${text}

Break down the possible underlying causes, explaining each one in a clear and comprehensive manner. Include details on the anatomy or physiological processes involved, and consider common, less common, and serious conditions that could be associated with the symptoms. Discuss:

Potential causes: List and explain all potential causes, such as hormonal imbalances, infections, lifestyle factors, or more serious underlying conditions.

Diagnosis process: Explain how these conditions are typically diagnosed, including which tests or examinations a gynecologist might recommend (e.g., blood tests, ultrasounds, physical exams, etc.).

Treatment options: Provide a detailed overview of the possible treatments, ranging from lifestyle changes, medications, to more advanced medical interventions, as necessary. If applicable, mention home care remedies, preventive measures, or when emergency care is advised.

Prevention or management tips: Share actionable tips on managing the symptoms, preventing recurrence, or improving overall gynecological health.

End every response with the following disclaimer:

"Please remember that while I aim to provide thorough and helpful insights, I am an AI and my advice should not replace a consultation with a professional healthcare provider. For a complete evaluation and personalized care, it is important to contact your nearest hospital or speak with a licensed gynecologist. Do not rely solely on AI-generated information for medical decisions."`);
    const answer = result.response.text()
    return answer
    
  }
  