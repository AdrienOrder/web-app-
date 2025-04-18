import React, { createContext, useContext, useState, useEffect } from 'react'; // Импортируем необходимые функции и хуки из React

// Создаем контекст для темы
const ThemeContext = createContext(); // Создаем новый контекст

// Провайдер контекста для управления темой
export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // Состояние для отслеживания текущей темы (темная или светлая)

    // Функция для переключения темы
    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme); // Переключаем состояние темы на противоположное
    };

    // Эффект для изменения классов body в зависимости от текущей темы
    useEffect(() => {
        const body = document.body; // Получаем элемент body документа
        if (isDarkTheme) {
            body.classList.add('dark-theme'); // Добавляем класс для темной темы
            body.classList.remove('light-theme'); // Убираем класс для светлой темы
        } else {
            body.classList.add('light-theme'); // Добавляем класс для светлой темы
            body.classList.remove('dark-theme'); // Убираем класс для темной темы
        }
    }, [isDarkTheme]); // Эффект срабатывает при изменении isDarkTheme

    // Возвращаем провайдер контекста с доступными значениями
    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children} {/* Отображаем дочерние компоненты */}
        </ThemeContext.Provider>
    );
};

// Хук для доступа к контексту темы из других компонентов
export const useTheme = () => {
    return useContext(ThemeContext); // Используем useContext для получения значения из ThemeContext
};