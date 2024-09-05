import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import "./hamburger.sass"

const Hamburger = () => {

    const { t } = useTranslation()

    return (
        <div className="hamburger">
            <ul className="hamburger__navbar">
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
            <div className="hamburger__creator"></div>
        </div>
    )
}

export default Hamburger;