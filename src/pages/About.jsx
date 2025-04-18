// src/components/About.jsx
import React from 'react'; // Импортируем React

const About = () => { // Определяем функциональный компонент About
    return (
        <div> {/* Контейнер для содержимого компонента */}
            <h1>О себе</h1> {/* Заголовок первого уровня с текстом "О себе" */}
            <p>about</p> {/* Параграф с текстом "about" */}
            <p>ABOUT</p> {/* Параграф с текстом "ABOUT" */}
        </div>
    );
};

export default About; // Экспортируем компонент About по умолчанию