import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import QuestionList from '../components/QuestionList';
import { Container, Typography, CircularProgress, Snackbar, Alert } from '@mui/material';
import { generateQuestions } from '../api/questionApi';

const Home = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleGenerateQuestions = async (passage) => {
        setLoading(true);
        setError(null);
        try {
            // call generate questions API 
            const generatedQuestions = await generateQuestions(passage);
            setQuestions(generatedQuestions);
        } catch (err) {
            setError(err.message);
            setOpenSnackbar(true);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
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
            {loading ? <CircularProgress /> : <QuestionList questions={questions} />}

            {/* Snackbar for error alert */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Home;
