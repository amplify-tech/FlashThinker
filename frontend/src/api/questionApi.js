import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/generate-questions  '; 

export const generateQuestions = async (passage) => {
    try {
        const response = await axios.post(API_URL, { passage });
        return response.data.questions; 
    } catch (error) {
        console.error('Error generating questions:', error);
        return [];
    }
};