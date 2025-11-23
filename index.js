// index.js

// --- THIS LINE IS REQUIRED TO LOAD YOUR GEMINI_API_KEY FROM .env ---
import 'dotenv/config'; 
// ------------------------------------------------------------------

import { GoogleGenAI } from '@google/genai';

// Initialize the AI client. It automatically uses the GEMINI_API_KEY
// you set in your .env file.
const ai = new GoogleGenAI({}); 

async function runGemini() {
  const model = "gemini-2.5-flash"; // A fast and capable model

  // Your prompt for the AI
  const prompt = "Given that the project is named 'Autoleadsa1', write a short Python function that prints a list of three potential business names for an automated lead generation company.";

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    
    console.log("--- Gemini API Response ---");
    console.log(response.text);

  } catch (error) {
    console.error("--- Error calling Gemini API ---");
    // This often happens if the API key is wrong or missing permissions
    console.error(error);
  }
}

runGemini();