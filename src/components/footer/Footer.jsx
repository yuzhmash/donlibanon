import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';

import SubFooter from './SubFooter';

import './Footer.sass'

const Footer = ({borderBottom}) => {

    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <address className="footer__address">
                        <div className="footer__title">{t('footer.address')}:</div> <span>Storgatan 11, Örnsköldsvik</span>
                    </address>
                    <div className="footer__time">
                        <div className="footer__title">{t('footer.hours.title')}:</div> <span>{t('footer.hours.time')}</span>
                    </div>
                    <div className="footer__number">
                        <div className="footer__title">{t('footer.number')}:</div> <span>+46 70 000 00 00</span>
                    </div>
                    <div className="footer__email">
                        <div className="footer__title">E-post:</div> <span>donlibanon@gmail.com</span>
                    </div>
                    <div className="footer__media">
                        <FontAwesomeIcon className='footer__media__inst' style={{fontSize: "28px"}} icon={faFacebook}/>
                        <FontAwesomeIcon className='footer__media__face' style={{fontSize: "28px"}} icon={faInstagram}/>
                    </div>
                </div>
            </div>
            {borderBottom ? <SubFooter/> : null}
        </footer>
    )
}

export default Footer;