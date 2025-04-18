// components/Counter.js
import React, { useState } from 'react'; // Импортируем React и хук useState для добавления состояния в функциональные компоненты
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap для использования готовых стилей
import './Counter.css'; // Импортируем стили из Counter.css для кастомизации компонента

const Counter = () => { // Определяем функциональный компонент Counter с помощью стрелочной функции
    const [count, setCount] = useState(0); // Создаем состояние count с начальным значением 0 с помощью хука useState

    const increment = () => { // Определяем функцию для увеличения счетчика
        setCount(prevCount => prevCount + 1); // Обновляем состояние count, увеличивая его на 1
    };

    const decrement = () => { // Определяем функцию для уменьшения счетчика
        setCount(prevCount => prevCount - 1); // Обновляем состояние count, уменьшая его на 1
    };

    return (
        <div className="container"> {/* Используем класс container из Bootstrap для оформления */}
            <h2>Счётчик: {count}</h2> {/* Отображаем текущее значение счетчика */}
            <div> {/* Оборачиваем кнопки в div для группировки */}
                <button onClick={decrement} className="btn btn-primary">Уменьшить</button> 
                {/* Кнопка для уменьшения счетчика с обработчиком события onClick */}
                <button onClick={increment} className="btn btn-danger">Увеличить</button> 
                {/* Кнопка для увеличения счетчика с обработчиком события onClick */}
            </div>
        </div>
    );
};

export default Counter; // Экспортируем компонент Counter для использования в других частях приложения