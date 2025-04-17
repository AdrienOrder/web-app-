// src/components/FeedbackBlock.jsx
import React from 'react';
import FeedbackForm from './feedback/FeedbackForm';
import FeedbackList from './feedback/FeedbackList';
import { useTheme } from './ThemeContext';
import './FeedbackBlock.css'; // Импортируйте CSS

const FeedbackBlock = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div className={`feedback-block ${isDarkTheme ? 'bg-dark' : 'bg-light'} p-4 rounded`}>
            <h2>Обратная связь</h2>
            <FeedbackForm />
            <FeedbackList />
        </div>
    );
};

export default FeedbackBlock;