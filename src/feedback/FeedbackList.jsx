import React from 'react'; // Импортируем React
import { useFeedback } from './FeedbackContext'; // Импортируем хук useFeedback для доступа к контексту отзывов
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme для доступа к контексту темы
import './Feedback.css'; // Импортируем стили для компонента

const FeedbackList = () => { // Определяем функциональный компонент FeedbackList
    const { feedbacks, deleteFeedback } = useFeedback(); // Получаем массив отзывов и функцию для удаления отзыва из контекста
    const { isDarkTheme } = useTheme(); // Получаем состояние темы (темная или светлая) из контекста темы

    // Фильтруем отзывы, чтобы оставить только те, которые содержат имя и текст отзыва
    const validFeedbacks = feedbacks.filter(feedback => feedback.name && feedback.feedback); 

    return (
        <div className={`feedback-list ${isDarkTheme ? 'bg-dark' : 'bg-light'} p-3 rounded`}>
            {/* Определяем класс контейнера в зависимости от темы (темная или светлая) */}
            {validFeedbacks.length > 0 && <h3>Отзывы:</h3>} 
            {/* Если есть действительные отзывы, отображаем заголовок "Отзывы" */}
            {validFeedbacks.map((feedback) => ( // Проходим по каждому действительному отзыву
                <div key={feedback.id} className="feedback-item mb-2"> 
                    {/* Создаем контейнер для каждого отзыва с уникальным ключом */}
                    <p className="feedback-name fw-bold">{feedback.name}:</p> 
                    {/* Отображаем имя автора отзыва с жирным шрифтом */}
                    <p>{feedback.feedback}</p> 
                    {/* Отображаем текст отзыва */}
                    <button onClick={() => deleteFeedback(feedback.id)} className="btn btn-danger">Удалить</button>
                    {/* Кнопка для удаления отзыва, при нажатии вызывается функция deleteFeedback с идентификатором отзыва */}
                </div>
            ))}
        </div>
    );
};

export default FeedbackList; // Экспортируем компонент FeedbackList по умолчанию