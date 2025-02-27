import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import QuestionList from '../components/QuestionList';
import { Container, Typography } from '@mui/material';
import { generateQuestions } from '../api/questionApi';

const Home = () => {
    const [questions, setQuestions] = useState([]);

    const handleGenerateQuestions = async (passage) => {
        const generatedQuestions = await generateQuestions(passage);
        setQuestions(["generatedQuestions", "sdfgh, dfg sfdgh"]);
    };

    return (
        <Container>
            <br/>
            <Typography variant="h5" gutterBottom>
                Paragraph Reading
            </Typography>
            <br/>
            <TextInput onSubmit={handleGenerateQuestions} />
            <br/>
            <QuestionList questions={questions} />
        </Container>
    );
};

export default Home;