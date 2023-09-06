import axiosClient from "./axiosClient";
import { Configuration, OpenAIApi } from "openai";

export const askAI = {

    
    getResponseAI: async (text: string) => {

        // cach 1
        const apiKey = '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';

        const formData = new FormData();
        formData.append("model", "text-davinci-003");
        formData.append("prompt", text);
        formData.append("temperature", "0");
        formData.append("max_tokens", "7");
        formData.append("frequency_penalty", "0.5");
        formData.append("presence_penalty", "0");

        try {
            const API_URL = new URL('https://api.openai.com/v1/completions');
            const response = await axiosClient.post(API_URL.href, formData, {
                headers: {
                    "Content-Type" : "multipart/form-data",
                    "Authorization" : "Bearer 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",
                },
            });    

            return response.data.text;

        } catch (error) {
            return "Error calling AI API: " + error;
        }
    },
};