// src/components/Footer.jsx
import React, { useState } from 'react'; // Импортируем React и хук useState для управления состоянием
import { useTheme } from '../ThemeContext'; // Импортируем контекст темы для определения текущей темы (темная или светлая)
import { Container } from 'react-bootstrap'; // Импортируем компонент Container из Bootstrap для удобного оформления
import FeedbackBlock from '../FeedbackBlock'; // Импортируем компонент FeedbackBlock для отображения отзывов
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap
import './Footer.css'; // Импортируем стили из Footer.css для кастомизации компонента

function Footer() { // Определяем функциональный компонент Footer
    const { isDarkTheme } = useTheme(); // Получаем информацию о текущей теме (темная или светлая) из контекста темы
    const [showFeedback, setShowFeedback] = useState(false); // Создаем состояние showFeedback для управления видимостью 
    // блока отзывов

    const toggleFeedback = () => { // Определяем функцию для переключения видимости блока отзывов
        setShowFeedback(!showFeedback); // Меняем состояние showFeedback на противоположное
    };

    return (
        <footer className={`footer ${isDarkTheme ? 'dark-f' : 'light-f'}`}> {/* Устанавливаем класс footer в зависимости от темы */}
            <Container> {/* Используем компонент Container для обертки содержимого */}
                {showFeedback && <FeedbackBlock />} {/* Условный рендеринг компонента FeedbackBlock, если showFeedback истинно */}
                <button className="btn btn-primary mt-3" onClick={toggleFeedback}> {/* Кнопка для переключения 
                видимости блока отзывов с обработчиком события onClick */}
                    Отзывы {/* Текст кнопки */}
                </button>
                <div className="footer-content"> {/* Оборачиваем содержимое футера в div для стилизации */}
                    <p className="mb-0">&copy; 2025 все права защищены (кроме водительских, но это неточно).</p> 
                    {/* Текст с авторскими правами */}
                </div>
            </Container>
        </footer>
    );
}

export default Footer; // Экспортируем компонент Footer для использования в других частях приложения