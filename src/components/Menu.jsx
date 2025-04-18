// components/Menu.js
import React, { useState, useEffect, useRef } from 'react'; // Импортируем необходимые хуки из React
import { Link } from 'react-router-dom'; // Импортируем компонент Link для навигации
import { useTheme } from '../ThemeContext'; // Импортируем контекст темы для определения текущей темы
import { Collapse } from 'react-bootstrap'; // Импортируем компонент Collapse из Bootstrap для анимации меню
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap
import './Menu.css'; // Импортируем стили для меню

// Массив объектов с путями и метками для пунктов меню
const menuItems = [
    { path: '/lab1', label: 'Лабораторная работа № 1' },
    { path: '/lab2', label: 'Лабораторная работа № 2' },
    { path: '/lab3', label: 'Лабораторная работа № 3' },
    { path: '/lab4', label: 'Лабораторная работа № 4' },
    { path: '/lab5', label: 'Лабораторная работа № 5' },
    { path: '/lab6', label: 'Лабораторная работа № 6' },
    { path: '/lab7', label: 'Лабораторная работа № 7' },
    { path: '/lab8', label: 'Лабораторная работа № 8' },
    { path: '/lab9', label: 'Лабораторная работа № 9' },
    { path: '/counter', label: 'Счётчик' },
];

// Компонент Menu
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false); // Состояние для отслеживания открытости меню
    const { isDarkTheme } = useTheme(); // Получаем текущее состояние темы (темная или светлая)
    const menuRef = useRef(null); // Создаем реф для контейнера меню

    // Функция для переключения состояния открытости меню
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Обработчик клика вне меню, чтобы закрыть его при клике вне области меню
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false); // Закрываем меню, если кликнули вне его области
        }
    };

    // Эффект для добавления и удаления обработчика события клика вне меню
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside); // Добавляем обработчик события клика мыши
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Удаляем обработчик при размонтировании компонента
        };
    }, []);

    return (
        <div className={`menu__container ${isDarkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}`} ref={menuRef}>
            {/* Кнопка для открытия/закрытия меню */}
            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span> {/* Иконка переключателя */}
            </button>
            {/* Компонент Collapse из Bootstrap для анимации открытия/закрытия меню */}
            <Collapse in={isOpen}>
                <nav className={`menu ${isDarkTheme ? 'dark-m' : 'light-m'} p-3`}>
                    {/* Список пунктов меню */}
                    <ul className="list-unstyled">
                        {/* Проходим по массиву menuItems и создаем элементы списка */}
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                {/* Ссылка на соответствующий путь с закрытием меню при клике */}
                                <Link to={item.path} className={`nav-link ${isDarkTheme ? 'text-white' : 'text-dark'}`} onClick={() => setIsOpen(false)}>
                                    {item.label} {/* Отображаем метку пункта меню */}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Collapse>
        </div>
    );
};

export default Menu; // Экспортируем компонент Menu по умолчанию