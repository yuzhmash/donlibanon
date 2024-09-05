import Header from "../header/Header";
import Footer from "../footer/Footer";
import Feedback from "../feedback/Feedback";
import FeedbackMessage from "../feedback/FeedbackMessage";

const FeedbackScreen = () => {
    return (
        <>
            <Header/>
            <Feedback/>
            <Footer borderBottom={true}/>
        </>
    )
}

export default FeedbackScreen;