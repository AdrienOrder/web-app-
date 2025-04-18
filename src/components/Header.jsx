// components/Header.js
import React from 'react'; // Импортируем React для создания компонента
import Menu from './Menu'; // Импортируем компонент Menu для отображения меню
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme для работы с темой приложения
import { useAuth } from '../auto/AuthContext'; // Импортируем хук useAuth для работы с аутентификацией пользователя
import { useNavigate, Link } from 'react-router-dom'; // Импортируем Link для навигации и useNavigate для программной навигации
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap
import './Header.css'; // Импортируем стили из Header.css

const Header = () => { // Определяем функциональный компонент Header
    const { isDarkTheme, toggleTheme } = useTheme(); // Получаем информацию о текущей теме и функцию для её переключения 
    // из контекста темы
    const { isAuthenticated, logout, userEmail } = useAuth(); // Получаем информацию о состоянии аутентификации и функции 
    // из контекста аутентификации
    const navigate = useNavigate(); // Инициализируем navigate для программной навигации

    const handleEmailClick = () => { // Функция для обработки клика по email пользователя
        navigate('/profile'); // Перенаправляем пользователя на страницу профиля
    };

    return (
        <header className={`header ${isDarkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}`}> {/* Устанавливаем классы 
        в зависимости от темы */}
            {isAuthenticated && <Menu />} {/* Условный рендеринг компонента Menu, если пользователь аутентифицирован */}
            {isAuthenticated && ( // Условие для отображения навигационных ссылок, если пользователь аутентифицирован
                <nav>
                    <Link to="/home" className="nav-link-h">Главная</Link> {/* Ссылка на главную страницу */}
                    <Link to="/about" className="nav-link-a">О себе</Link> {/* Ссылка на страницу "О себе" */}
                </nav>
            )}
            <button className="btn btn-secondary" onClick={toggleTheme}> {/* Кнопка для переключения темы 
            с обработчиком события onClick */}
                {isDarkTheme ? 'Светлая тема' : 'Темная тема'} {/* Текст кнопки меняется в зависимости от текущей темы */}
            </button>
            <div className="d-flex align-items-center"> {/* Flex-контейнер для выравнивания элементов по центру */}
                {isAuthenticated ? ( // Условие для отображения информации о пользователе и кнопки выхода, 
                // если пользователь аутентифицирован
                    <>
                        <span className="user-email me-3" onClick={handleEmailClick}> {/* Отображаем email пользователя 
                        с обработчиком клика */}
                            {userEmail} {/* Email пользователя */}
                        </span>
                        <button className="btn btn-danger" onClick={logout}>Выйти</button> {/* Кнопка выхода 
                        с обработчиком события onClick */}
                    </>
                ) : ( // Если пользователь не аутентифицирован, отображаем кнопку входа
                    <button className="btn btn-primary" onClick={() => alert('Заполните форму')}>Войти</button> 
                    /* Кнопка входа с обработчиком события onClick */
                )}
            </div>
        </header>
    );
};

export default Header; // Экспортируем компонент Header для использования в других частях приложения