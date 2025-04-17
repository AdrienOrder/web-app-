import React, { useCallback } from 'react'; 
import { useForm } from 'react-hook-form';
import { useFeedback } from './FeedbackContext'; 
import { useTheme } from '../ThemeContext';
import './Feedback.css'; 

const FeedbackForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const { addFeedback } = useFeedback();
    const { isDarkTheme } = useTheme();

    const onSubmit = useCallback((data) => {
        addFeedback({ name: data.name, feedback: data.feedback }); 
        reset(); 
    }, [addFeedback, reset]);

    return (
        <form className={`feedback-form ${isDarkTheme ? 'bg-dark' : 'bg-light'} p-3 rounded`} onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Ваше имя:</label>
                <input {...register('name', { required: true })} className="form-control" placeholder="Введите ваше имя" />
            </div>
            <div className="mb-3">
                <label className="form-label">Ваш отзыв:</label>
                <textarea {...register('feedback', { required: true })} className="form-control" placeholder="Введите ваш отзыв" />
            </div>
            <button type="submit" className="btn btn-primary">Отправить отзыв</button>
        </form>
    );
};

export default FeedbackForm;
