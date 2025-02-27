import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TextInput = ({ onSubmit }) => {
    const [passage, setPassage] = useState('');

    const handleSubmit = () => {
        if (passage.trim()) {
            onSubmit(passage);
        }
    };

    return (
        <div>
            <TextField
                label="Paste Reading Passage"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                value={passage}
                onChange={(e) => setPassage(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Generate Questions
            </Button>
        </div>
    );
};

export default TextInput;