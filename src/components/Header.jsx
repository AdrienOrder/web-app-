// components/Header.js
import React from 'react';
import Menu from './Menu';
import { useTheme } from '../ThemeContext';
import { useAuth } from '../auto/AuthContext';
import { useNavigate, Link } from 'react-router-dom'; // Импортируем Link
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Импортируем стили

const Header = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const { isAuthenticated, logout, userEmail } = useAuth();
    const navigate = useNavigate();

    const handleEmailClick = () => {
        navigate('/profile');
    };

    return (
        <header className={`header ${isDarkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            {isAuthenticated && <Menu />} {/* Условие для отображения Menu */}
            {isAuthenticated && ( // Условие для отображения навигации
                <nav>
                    <Link to="/home" className="nav-link-h">Главная</Link>
                    <Link to="/about" className="nav-link-a">О себе</Link>
                    
                </nav>
            )}
            <button className="btn btn-secondary" onClick={toggleTheme}>
                {isDarkTheme ? 'Светлая тема' : 'Темная тема'}
            </button>
            <div className="d-flex align-items-center">
                {isAuthenticated ? (
                    <>
                        <span className="user-email me-3" onClick={handleEmailClick}>
                            {userEmail}
                        </span>
                        <button className="btn btn-danger" onClick={logout}>Выйти</button>
                    </>
                ) : (
                    <button className="btn btn-primary" onClick={() => alert('Заполните форму')}>Войти</button>
                )}
            </div>
        </header>
    );
};

export default Header;