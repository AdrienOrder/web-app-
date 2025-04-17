import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Получаем корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);