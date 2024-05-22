import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const links = [
        { text: 'Главная', url: '/' },
        { text: 'Концерты', url: '/Concerts' },
        { text: 'Услуги', url: '/Uslugi' },
        { text: 'О нас', url: '/About' },
    ];

    return (
        <header className="header">
            <div className="logo-and-title">
            <div className="logo">
                <img src="logo.webp" alt="Логотип" />
            </div>
            <span className="title">Три Дня Дождя</span>
            </div>
            <nav>
            <ul>
            {links.map((link, index) => (
                <li key={index}>
                <Link to={link.url}>{link.text}</Link>
                </li>
            ))}
            </ul>
        </nav>
        </header>
    );
};


export default Header;