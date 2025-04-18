import React, { StrictMode } from 'react'; // Импортируем React и компонент StrictMode
import ReactDOM from 'react-dom/client'; // Импортируем ReactDOM для работы с корневым элементом
import App from './App'; // Импортируем основной компонент приложения App

// Получаем корневой элемент из DOM по ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение в корневом элементе
root.render(
    <StrictMode> {/* Оборачиваем приложение в StrictMode для выявления потенциальных проблем */}
        <App /> {/* Отображаем основной компонент приложения */}
    </StrictMode>
);