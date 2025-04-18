// components/Content.js
import React from 'react'; // Импортируем библиотеку React
import { Routes, Route } from 'react-router-dom'; // Импортируем компоненты для маршрутизации из react-router-dom
import { Row, Col } from 'react-bootstrap'; // Импортируем необходимые компоненты из react-bootstrap
import '../components/Content.css'; // Импортируем стили для компонента Content
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme для получения информации о теме
import { useAuth } from '../auto/AuthContext'; // Импортируем хук useAuth для получения информации об аутентификации
import Counter from './Counter'; // Импортируем компонент Counter
import AuthContainer from '../auto/AuthContainer'; // Импортируем компонент AuthContainer для аутентификации
import UserProfile from '../auto/userProfile'; // Импортируем компонент UserProfile для отображения профиля пользователя
import Home from '../pages/Home'; // Импортируем компонент Home для главной страницы
import About from '../pages/About'; // Импортируем компонент About для страницы "О нас"

const labWorks = [ // Массив объектов, представляющих лабораторные работы
    { id: 1, image: '/laba1.png', caption: 'Лабораторная работа 1' }, 
    { id: 2, image: '/laba2.png', caption: 'Лабораторная работа 2' }, 
    { id: 3, image: '/laba3.png', caption: 'Лабораторная работа 3' }, 
    { id: 4, image: '/laba4.png', caption: 'Лабораторная работа 4' }, 
    { id: 5, image: '/laba5.png', caption: 'Лабораторная работа 5' }, 
    { id: 6, image: '/laba6.png', caption: 'Лабораторная работа 6' },
    { id: 7, image: '/laba7.png', caption: 'Лабораторная работа 7' }, 
    { id: 8, image: '/laba8.png', caption: 'Лабораторная работа 8' }, 
    { id: 9, image: '/laba9.png', caption: 'Лабораторная работа 9' }, 
];

const LabWork = ({ lab }) => { // Компонент LabWork принимает объект lab как пропс
    return (
        <div className="lab-work"> {/* Контейнер для отображения информации о лабораторной работе */}
            <h3>{lab.caption}</h3> {/* Заголовок с названием лабораторной работы */}
            <img className="slider-image" src={lab.image} alt={lab.caption} /> {/* Изображение лабораторной работы */}
        </div>
    );
};

const Content = () => { // Основной компонент Content
    const { isDarkTheme } = useTheme(); // Получаем состояние темы (темная или светлая)
    const { isAuthenticated } = useAuth(); // Получаем информацию о том, аутентифицирован ли пользователь

    return (
        <div className={`content ${isDarkTheme ? 'dark' : 'light'}`}> {/* Контейнер с классом в зависимости от темы */}
            <Row> {/* Строка для размещения колонок */}
                <Col> {/* Колонка для содержимого */}
                    {isAuthenticated ? ( // Проверяем, аутентифицирован ли пользователь
                        <Routes> {/* Определяем маршруты */}
                            {labWorks.map((lab) => ( // Проходим по массиву labWorks и создаем маршрут для каждой лабораторной 
                            // работы
                                <Route key={lab.id} path={`/lab${lab.id}`} element={<LabWork lab={lab} />} /> // Создаем маршрут 
                                // для каждой лабораторной работы
                            ))}
                            <Route path="/home" element={<Home />} /> {/* Маршрут для главной страницы */}
                            <Route path="/about" element={<About />} /> {/* Маршрут для страницы "О нас" */}
                            <Route path="/counter" element={<Counter />} /> {/* Маршрут для компонента Counter */}
                            <Route path="/profile" element={<UserProfile />} /> {/* Маршрут для профиля пользователя */}
                        </Routes>
                    ) : (
                        <AuthContainer /> // Если пользователь не аутентифицирован, отображаем AuthContainer
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default Content; // Экспортируем компонент Content по умолчанию