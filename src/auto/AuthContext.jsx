// src/auto/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react'; // Импортируем необходимые библиотеки и хуки

const AuthContext = createContext(); // Создаем контекст для хранения и передачи данных аутентификации

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Состояние для отслеживания аутентификации пользователя
    const [userEmail, setUserEmail] = useState(""); // Хранит адрес электронной почты текущего аутентифицированного пользователя

    const login = async (email, password) => { // Функция для входа пользователя
        const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`); // Запрос на сервер для проверки учетных данных
        
        if (response.ok) { // Если ответ от сервера успешный
            const users = await response.json(); // Получаем список пользователей
            if (users.length > 0) { // Если пользователь найден
                setIsAuthenticated(true); // Устанавливаем состояние аутентификации в true
                setUserEmail(email); // Сохраняем email пользователя
                return true; // Успешный вход
            } else {
                alert("Неверный email или пароль."); // Уведомляем о неверных учетных данных
                return false; // Неверные учетные данные
            }
        } else {
            return false; // Ошибка входа, если ответ не успешный
        }
    };

    const logout = () => { // Функция для выхода пользователя
        setIsAuthenticated(false); // Сбрасываем состояние аутентификации
        setUserEmail(''); // Очищаем email пользователя
        
        localStorage.removeItem('userProfile'); // Удаляем профиль пользователя из localStorage
    };

    const register = async (email, password) => { // Функция для регистрации нового пользователя
        const checkResponse = await fetch(`http://localhost:5000/users?email=${email}`); // Проверяем, существует ли пользователь с таким email
        
        if (checkResponse.ok) { // Если ответ от сервера успешный
            const existingUsers = await checkResponse.json(); // Получаем список существующих пользователей
            if (existingUsers.length > 0) { // Если пользователь уже существует
                alert("Пользователь с таким email уже существует. Пожалуйста, войдите в систему."); 
                return false; // Пользователь уже существует
            }
        }

        const response = await fetch('http://localhost:5000/users', { // Если пользователя не существует, продолжаем регистрацию
            method: 'POST', // Метод запроса POST для создания нового пользователя
            headers: {
                'Content-Type': 'application/json', // Указываем тип содержимого как JSON
            },
            body: JSON.stringify({ email, password }), // Отправляем email и пароль в теле запроса в формате JSON
        });
    
        if (response.ok) { // Если ответ от сервера успешный после регистрации
            const user = await response.json(); // Получаем данные нового пользователя
            setIsAuthenticated(true); // Устанавливаем состояние аутентификации в true
            setUserEmail(user.email); // Сохраняем email нового пользователя
            return true; // Успешная регистрация
        } else {
            alert("Ошибка регистрации. Пожалуйста, попробуйте еще раз."); // Уведомляем об ошибке регистрации
            return false; // Ошибка регистрации
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register, userEmail }}> 
            {children} {/* Передаем дочерние компоненты */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext); // Хук для использования контекста аутентификации в других компонентах 