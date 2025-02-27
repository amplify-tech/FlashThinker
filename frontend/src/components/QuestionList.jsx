import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const QuestionList = ({ questions }) => {
    return (
        <div>
            {questions.map((question, index) => (
                <Card key={index} variant="outlined" style={{ margin: '10px 0' }}>
                    <CardContent>
                        <Typography variant="body1">{question}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default QuestionList;