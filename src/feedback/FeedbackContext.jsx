import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'; // Импортируем необходимые модули из React

const FeedbackContext = createContext(); // Создаем контекст для отзывов

export const FeedbackProvider = ({ children }) => { // Определяем компонент FeedbackProvider
    const [feedbacks, setFeedbacks] = useState([]); // Создаем состояние для хранения отзывов

    // Функция для получения отзывов с сервера
    const fetchFeedbacks = useCallback(async () => { // Используем useCallback для мемоизации функции
        try {
            const response = await fetch('http://localhost:5000/feedback'); // Выполняем запрос на сервер
            if (!response.ok) { // Проверяем успешность ответа
                throw new Error('Ошибка при получении отзывов'); 
            }
            const data = await response.json(); // Преобразуем ответ в JSON
            setFeedbacks(data); // Обновляем состояние отзывов
        } catch (error) {
            console.error("Ошибка при получении отзывов:", error); 
        }
    }, []); // Зависимости пустые, чтобы функция не менялась

    // Функция для добавления отзыва на сервер
    const addFeedback = async (feedback) => {
        try {
            const response = await fetch('http://localhost:5000/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedback),
            });
            if (!response.ok) {
                throw new Error('Ошибка при добавлении отзыва');
            }
            const data = await response.json();
            setFeedbacks(prevFeedbacks => [...prevFeedbacks, data]);
        } catch (error) {
            console.error("Ошибка при добавлении отзыва:", error);
        }
    };

    // Функция для удаления отзыва с сервера
    const deleteFeedback = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/feedback/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Ошибка при удалении отзыва');
            }
            setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback.id !== id));
        } catch (error) {
            console.error("Ошибка при удалении отзыва:", error);
        }
    };

    useEffect(() => { 
        fetchFeedbacks(); // Вызываем функцию получения отзывов при монтировании компонента 
    }, [fetchFeedbacks]); 

    return (
        <FeedbackContext.Provider value={{ feedbacks, addFeedback, deleteFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export const useFeedback = () => {
    return useContext(FeedbackContext); // Создаем хук для использования контекста в других компонентах
};