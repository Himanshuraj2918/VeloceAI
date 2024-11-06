// Make sure to include these imports:
// import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

const apiKey =  process.env.VITE_API_KEY;


const genAI = new GoogleGenerativeAI(process.env.VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Generate a javaScript code to fetch the data from the API";


const generate = async()=>{
try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
} catch (error) {
    console.error(error);
    
}
}


generate()
