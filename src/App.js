// App.js
import React from 'react'; // Импортируем React
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter для маршрутизации
import { ThemeProvider } from './ThemeContext'; // Импортируем ThemeProvider для управления темой приложения
import { AuthProvider } from './auto/AuthContext'; // Импортируем AuthProvider для управления аутентификацией пользователей
import { FeedbackProvider } from './feedback/FeedbackContext'; // Импортируем FeedbackProvider для управления отзывами
import Header from './components/Header'; // Импортируем компонент Header, который отображает заголовок приложения
import Content from './components/Content'; // Импортируем компонент Content, который содержит основное содержимое приложения
import Footer from './components/Footer'; // Импортируем компонент Footer, который отображает нижний колонтитул приложения

const App = () => { // Определяем функциональный компонент App
    return (
        <BrowserRouter> {/* Оборачиваем приложение в BrowserRouter для поддержки маршрутизации */}
            <ThemeProvider> {/* Оборачиваем в ThemeProvider для доступа к контексту темы */}
                <FeedbackProvider> {/* Оборачиваем в FeedbackProvider для доступа к контексту отзывов */}
                    <AuthProvider> {/* Оборачиваем в AuthProvider для доступа к контексту аутентификации */}
                        <Header /> {/* Отображаем компонент Header */}
                        <Content /> {/* Отображаем компонент Content */}
                        <Footer /> {/* Отображаем компонент Footer */}
                    </AuthProvider>
                </FeedbackProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App; // Экспортируем компонент App по умолчанию