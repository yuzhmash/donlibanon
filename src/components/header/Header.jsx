import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Header.sass'

const Header = () => {

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Изменить язык
      };

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link end="true" to="/" className='header__logo'>
                        DON LIBANON
                    </Link>
                    <ul className="header__navbar">
                        <li><NavLink style={({isActive}) => {
                            return {
                                fontWeight: isActive ? 800 : ""
                            }
                        }} end="true" to="/menu">{t('header.menu')}</NavLink></li>
                        <li><NavLink style={({isActive}) => {
                            return {
                                fontWeight: isActive ? 800 : ""
                            }
                        }} end="true" to="/contacts">{t('header.contacts')}</NavLink></li>
                        <li><NavLink style={({isActive}) => {
                            return {
                                fontWeight: isActive ? 800 : ""
                            }
                        }} end="true" to="/feedback">Feedback</NavLink></li>
                    </ul>
                    <div className="header__languages">
                        <div onClick={() => changeLanguage('sv')} className={`header__languages_sv ${currentLanguage === 'sv' ? 'header__languages_active' : ''}`}>
                            Sva
                        </div>
                        /
                        <div onClick={() => changeLanguage('en')} className={`header__languages_eng ${currentLanguage === 'en' ? 'header__languages_active' : ''}`}>
                            Eng
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;