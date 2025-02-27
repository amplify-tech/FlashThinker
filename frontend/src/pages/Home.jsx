import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import QuestionList from '../components/QuestionList';
import { Container, Typography } from '@mui/material';
import { generateQuestions } from '../api/questionApi';

const Home = () => {
    const [questions, setQuestions] = useState([]);

    const handleGenerateQuestions = async (passage) => {
        const generatedQuestions = await generateQuestions(passage);
        setQuestions(generatedQuestions);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Paragraph Reading
            </Typography>
            <TextInput onSubmit={handleGenerateQuestions} />
            <QuestionList questions={questions} />
        </Container>
    );
};

export default Home;