// src/components/FeedbackBlock.jsx
import React from 'react'; // Импортируем React
import FeedbackForm from './feedback/FeedbackForm'; // Импортируем компонент FeedbackForm для отправки отзывов
import FeedbackList from './feedback/FeedbackList'; // Импортируем компонент FeedbackList для отображения списка отзывов
import { useTheme } from './ThemeContext'; // Импортируем хук useTheme для доступа к контексту темы
import './FeedbackBlock.css'; // Импортируем CSS стили для компонента

const FeedbackBlock = () => { // Определяем функциональный компонент FeedbackBlock
    const { isDarkTheme } = useTheme(); // Получаем значение isDarkTheme из контекста темы

    return (
        <div className={`feedback-block ${isDarkTheme ? 'bg-dark' : 'bg-light'} p-4 rounded`}>
            {/* Контейнер для блока обратной связи с динамическим классом в зависимости от темы */}
            <h2>Обратная связь</h2> {/* Заголовок второго уровня с текстом "Обратная связь" */}
            <FeedbackForm /> {/* Отображаем компонент формы обратной связи */}
            <FeedbackList /> {/* Отображаем компонент списка отзывов */}
        </div>
    );
};

export default FeedbackBlock; // Экспортируем компонент FeedbackBlock по умолчанию