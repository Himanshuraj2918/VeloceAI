import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
export const generateResponse = async(prompt)=>{
try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
} catch (error) {
    console.error(error);
    
}
}


