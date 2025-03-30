import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function getAIResponse(prompt) {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
    });
    console.log(response.choices[0].message);
    console.log(process.env.OPENAI_API_KEY);
    return response.choices[0].message?.content || "";
}
