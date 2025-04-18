import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'; // Импортируем необходимые 
// модули из React

const FeedbackContext = createContext(); // Создаем контекст для отзывов

// Определяем компонент FeedbackProvider, который будет оборачивать дочерние компоненты
export const FeedbackProvider = ({ children }) => { 
    const [feedbacks, setFeedbacks] = useState([]); // Создаем состояние для хранения отзывов (изначально пустой массив)

    // Функция для получения отзывов с сервера
    const fetchFeedbacks = useCallback(async () => { // Используем useCallback для мемоизации функции
        try {
            const response = await fetch('http://localhost:5000/feedback'); // Выполняем запрос на сервер для получения отзывов
            if (!response.ok) { // Проверяем успешность ответа (статус 200-299)
                throw new Error('Ошибка при получении отзывов'); // Если ответ не успешный, выбрасываем ошибку
            }
            const data = await response.json(); // Преобразуем ответ в JSON
            setFeedbacks(data); // Обновляем состояние отзывов с полученными данными
        } catch (error) {
            console.error("Ошибка при получении отзывов:", error); // Логируем ошибку в консоль
        }
    }, []); // Зависимости пустые, чтобы функция не менялась между рендерами

    // Функция для добавления отзыва на сервер
    const addFeedback = async (feedback) => {
        try {
            const response = await fetch('http://localhost:5000/feedback', {
                method: 'POST', // Указываем метод запроса POST для добавления нового отзыва
                headers: {
                    'Content-Type': 'application/json', // Указываем тип содержимого как JSON
                },
                body: JSON.stringify(feedback), // Преобразуем объект отзыва в строку JSON и передаем в теле запроса
            });
            if (!response.ok) { 
                throw new Error('Ошибка при добавлении отзыва'); // Проверяем успешность ответа и выбрасываем ошибку при неуспехе
            }
            const data = await response.json(); // Преобразуем ответ в JSON
            setFeedbacks(prevFeedbacks => [...prevFeedbacks, data]); // Обновляем состояние отзывов, добавляя новый отзыв 
            // к предыдущим
        } catch (error) {
            console.error("Ошибка при добавлении отзыва:", error); // Логируем ошибку в консоль
        }
    };

    // Функция для удаления отзыва с сервера по его идентификатору
    const deleteFeedback = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/feedback/${id}`, {
                method: 'DELETE', // Указываем метод запроса DELETE для удаления отзыва
            });
            if (!response.ok) { 
                throw new Error('Ошибка при удалении отзыва'); // Проверяем успешность ответа и выбрасываем ошибку при неуспехе
            }
            setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback.id !== id)); // Обновляем состояние отзывов, 
            // исключая удаленный отзыв по его идентификатору
        } catch (error) {
            console.error("Ошибка при удалении отзыва:", error); // Логируем ошибку в консоль
        }
    };

    useEffect(() => { 
        fetchFeedbacks(); // Вызываем функцию получения отзывов при монтировании компонента 
    }, [fetchFeedbacks]); 

    return (
        <FeedbackContext.Provider value={{ feedbacks, addFeedback, deleteFeedback }}> {/* Передаем состояние и функции 
        через контекст */}
            {children} {/* Отображаем дочерние компоненты */}
        </FeedbackContext.Provider>
    );
};

// Создаем хук для использования контекста в других компонентах
export const useFeedback = () => {
    return useContext(FeedbackContext); 
};