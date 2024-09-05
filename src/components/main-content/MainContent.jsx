import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './MainContent.sass'

const MainContent = () => {

    const { t } = useTranslation();

    return (
        <main className="main">
            <div className="main__wrapper">
                <div className="main__logo">
                    {/* <Logo/> */}
                    {/* <img style={{width: "600px", height: "338px"}} src={logo} alt="" /> */}
                    <img src="https://mail.google.com/mail/u/2?ui=2&ik=f79cf37b3e&attid=0.2&permmsgid=msg-f:1805307950030357841&th=190dbe03ffbf8551&view=fimg&disp=thd&attbid=ANGjdJ_hSj6TnnWUzGgQ9pe22OHxh7jnKErNooEPlX7ewt30LEvOsIMxeJgvTScwW5fVm3cJ8Wu8KqDFLBVA7exODtGZD4ChfvNooLIEabsaIVddNLM7QGbmei6GohU&ats=2524608000000&sz=w2880-h1558" alt="" />
                </div>
                <div className="main__menu">
                    <Link end="true" to="/menu">{t('header.menu')}</Link>
                </div>
            </div>
        </main>
    )
}

export default MainContent;