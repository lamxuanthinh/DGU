import axios, { AxiosResponse, AxiosInstance } from "axios";
import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.OPEN_API_KEY;


const axiosAI: AxiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey,
    },
});

const aiResult = {
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 7,
    frequency_penalty: 0.5,
    presence_penalty: 0,
};

return await axiosAI.post("https://api.openai.com/v1/chat/completions", aiResult)

