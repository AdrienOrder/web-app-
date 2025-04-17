// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter
import { ThemeProvider } from './ThemeContext'; // Импортируем ThemeProvider
import { AuthProvider } from './auto/AuthContext'; // Импортируем AuthProvider
import { FeedbackProvider } from './feedback/FeedbackContext';
import Header from './components/Header'; // Импортируем компонент Header
import Content from './components/Content'; // Импортируем компонент Content
import Footer from './components/Footer'; // Импортируем компонент Footer


const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <FeedbackProvider>
                    <AuthProvider>
                        <Header />
                        <Content />
                        <Footer />
                    </AuthProvider>
                </FeedbackProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;