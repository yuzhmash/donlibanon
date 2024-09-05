import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MaskedInput from 'react-text-mask'
import { useTranslation } from 'react-i18next';

import Spinner from "../spinner/Spinner"
import useDonLibanonServer from "../../service/useDonLibanonService";

import './Feedback.sass'
import FeedbackMessageScreen from "../pages/FeedbackMessageScreen";

const Feedback = () => {

    const { t } = useTranslation();

    const [currentEmoji, setCurrentEmoji] = useState("")
    const [sent, setSent] = useState(false)
    const {sendMessage, loading, error, clearError} = useDonLibanonServer();
    
    useEffect(() => {
        formik.values.status = currentEmoji
    }, [currentEmoji])

    const handleEnterClick = (e, label) => {
        if (e.code === "Enter") {
            setCurrentEmoji(label)
            formik.values.status = label
        }
    }

    const emojiesBtns = [
        {emoji: "😃", label: "Perfekt"},
        {emoji: "🙂", label: "Normalt"},
        {emoji: "😡", label: "Dåligt"}
    ]

    const formik = useFormik({
        initialValues: {
            status: "",
            number: "",
            comment: ""
        },
        validationSchema: Yup.object({
            number: Yup.number()
                    .required("Required field!"),
            comment: Yup.string()
                    .required("Required field!"),
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(JSON.stringify(values, null, 2))
            sendMessage(values)
            setCurrentEmoji("")
            setSent(true)
            resetForm()
        }
    })

    return (
        <View formik={formik} t={t} emojiesBtns={emojiesBtns} handleEnterClick={handleEnterClick} setCurrentEmoji={setCurrentEmoji} currentEmoji={currentEmoji} loading={loading}/>
    )   
}

const View = ({formik, t, emojiesBtns, handleEnterClick, setCurrentEmoji, currentEmoji, loading}) => {
    return (
        <form className="feedback" onSubmit={formik.handleSubmit}>
            <h1 className="feedback__title">
                {t('feedback.title')}
            </h1>
            <div className="feedback__subtitle">
                {t('feedback.description')}
            </div>
            <ul className="feedback__blocks">
                {
                    emojiesBtns.map(({emoji, label}, i) => {
                        return <li key={i} tabIndex={0} onKeyDown={(e) => handleEnterClick(e, label)} onClick={() => setCurrentEmoji(label)}  className={`feedback__block ${currentEmoji === label ? "xyi" : null}`}>{emoji}<span>{t(`feedback.emojis.${[i]}`)}</span></li>
                    })
                }
            </ul>
            <div className="feedback__comment">
                {t("feedback.comment.title")} <span>*</span>
            </div>
            <textarea
                id="comment"
                name="comment"
                className='feedback__comment__textarea' 
                type="text" 
                placeholder={t("feedback.comment.input")}
                value={formik.values.comment}
                onChange={formik.handleChange} />
            {formik.errors.comment && formik.touched.comment && (<div className="error">{formik.errors.comment}</div>)}
            <div className='feedback__phone'>{t("feedback.phone.title")} <span>*</span></div>
            <MaskedInput 
                id="number"
                name="number"
                className='feedback__phone__input'
                mask={['+', '4', '6', ' ', /\d/, /\d/, '-', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
                placeholder="+46 __-___ __ __"
                value={formik.values.number}
                onChange={formik.handleChange} />
                {formik.errors.number && formik.touched.number && (<div className="error">{formik.errors.number}</div>)}
            <button type="submit" disabled={loading}><span>{t("feedback.button")}</span></button>
            {loading ? <Spinner/> : null}
            {/* {<FeedbackMessageScreen/>} */}
        </form>
    )
}

export default Feedback;