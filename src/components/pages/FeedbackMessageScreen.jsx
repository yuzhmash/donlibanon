import Footer from "../footer/Footer"
import Header from "../header/Header"
import FeedbackMessage from "../feedback/FeedbackMessage"

import useDonLibanonServer from "../../service/useDonLibanonService"

const FeedbackMessageScreen = ({title, subtitle, button, clearError, setSentForm}) => {

    const {error} = useDonLibanonServer()
console.log(error);
    return (
        <>
            <Header/>
            <FeedbackMessage title={title} subtitle={subtitle} button={button} clearError={clearError} setSentForm={setSentForm} />
            <Footer/>
        </>
    )
}

export default FeedbackMessageScreen;