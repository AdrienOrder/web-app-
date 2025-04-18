import React, { useCallback } from 'react'; // Импортируем необходимые модули из React
import { useForm } from 'react-hook-form'; // Импортируем хук useForm из библиотеки react-hook-form для управления формами
import { useFeedback } from './FeedbackContext'; // Импортируем хук useFeedback для доступа к контексту отзывов
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme для доступа к контексту темы
import './Feedback.css'; // Импортируем стили для компонента

const FeedbackForm = () => { // Определяем функциональный компонент FeedbackForm
    const { register, handleSubmit, reset } = useForm(); // Деструктурируем методы из хука useForm
    const { addFeedback } = useFeedback(); // Получаем функцию addFeedback из контекста отзывов
    const { isDarkTheme } = useTheme(); // Получаем состояние темы (темная или светлая) из контекста темы

    // Функция, вызываемая при отправке формы
    const onSubmit = useCallback((data) => {
        addFeedback({ name: data.name, feedback: data.feedback }); // Добавляем новый отзыв с именем и текстом отзыва
        reset(); // Сбрасываем форму после успешной отправки
    }, [addFeedback, reset]); // Зависимости: функции addFeedback и reset

    return (
        <form className={`feedback-form ${isDarkTheme ? 'bg-dark' : 'bg-light'} p-3 rounded`} onSubmit={handleSubmit(onSubmit)}>
            {/* Определяем класс формы в зависимости от темы (темная или светлая) */}
            <div className="mb-3"> {/* Контейнер для поля ввода имени */}
                <label className="form-label">Ваше имя:</label> {/* Метка для поля ввода имени */}
                <input {...register('name', { required: true })} className="form-control" placeholder="Введите ваше имя" />
                {/* Поле ввода имени с регистрацией через react-hook-form и обязательным заполнением */}
            </div>
            <div className="mb-3"> {/* Контейнер для текстового поля отзыва */}
                <label className="form-label">Ваш отзыв:</label> {/* Метка для текстового поля отзыва */}
                <textarea {...register('feedback', { required: true })} className="form-control" placeholder="Введите ваш отзыв" />
                {/* Текстовое поле для ввода отзыва с регистрацией через react-hook-form и обязательным заполнением */}
            </div>
            <button type="submit" className="btn btn-primary">Отправить отзыв</button> 
            {/* Кнопка для отправки формы с текстом "Отправить отзыв" */}
        </form>
    );
};

export default FeedbackForm; // Экспортируем компонент FeedbackForm по умолчанию