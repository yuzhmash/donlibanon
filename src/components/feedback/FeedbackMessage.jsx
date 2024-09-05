import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import "./Feedback.sass"

const FeedbackMessage = ({title, subtitle, button, clearError, setSentForm}) => {

    const { t } = useTranslation();

    return (
        <div className="feedback__message">
            <h2 className="feedback__message__title">{t("feedback.message.title")}</h2>
            <div className="feedback__message__subtitle">{t("feedback.message.subtitle")}</div>
            <Link to={`${button ? "/" : "/feedback"}`}><span>{t("feedback.message.button")}</span></Link>
        </div>
    )
}

export default FeedbackMessage;

// Din feedback är mottagen!
// Tack för att du hjälper oss att bli bättre.