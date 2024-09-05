import Footer from '../footer/Footer';
import { useTranslation } from 'react-i18next';

import './Contacts.sass'

const Contacts = () => {

    const {t} = useTranslation();

    return (
        <div className="contacts">
            <div className="container">
                <h1 className="contacts__title">
                    {t('contacts')}
                </h1>
                <Footer borderBottom={false}/>
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1793.2951713757313!2d18.710596561431892!3d63.290451362537695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467b57a86949046f%3A0x9f0d713400a243d8!2sChicken%20house!5e0!3m2!1spl!2sse!4v1721342833736!5m2!1spl!2sse"
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacts;