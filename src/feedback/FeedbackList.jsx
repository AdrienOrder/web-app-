import React from 'react';
import { useFeedback } from './FeedbackContext'; 
import { useTheme } from '../ThemeContext';
import './Feedback.css'; 

const FeedbackList = () => {
    const { feedbacks, deleteFeedback } = useFeedback(); 
    const { isDarkTheme } = useTheme();

    const validFeedbacks = feedbacks.filter(feedback => feedback.name && feedback.feedback); 

    return (
        <div className={`feedback-list ${isDarkTheme ? 'bg-dark' : 'bg-light'} p-3 rounded`}>
            {validFeedbacks.length > 0 && <h3>Отзывы:</h3>} 
            {validFeedbacks.map((feedback) => (
                <div key={feedback.id} className="feedback-item mb-2">
                    <p className="feedback-name fw-bold">{feedback.name}:</p> 
                    <p>{feedback.feedback}</p>
                    <button onClick={() => deleteFeedback(feedback.id)} className="btn btn-danger">Удалить</button>
                </div>
            ))}
        </div>
    );
};

export default FeedbackList;