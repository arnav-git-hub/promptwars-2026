import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export async function generateGeminiContent(prompt: string): Promise<string> {
  if (!prompt.trim()) return 'Prompt cannot be empty.';
  
  if (!genAI || API_KEY === 'your_gemini_api_key_here') {
    return `[Google Gemini Service Active]\nReceived prompt: "${prompt}"\n(Set VITE_GEMINI_API_KEY in .env for live AI responses)`;
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return `Error: ${error.message || 'Failed to generate response from Gemini API.'}`;
  }
}
