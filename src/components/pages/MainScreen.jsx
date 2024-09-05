import Header from "../header/Header";
import MainContent from "../main-content/MainContent";
import Footer from "../footer/Footer";

const MainScreen = () => {
    return (
        <>
            <Header/>
            <MainContent/>
            <Footer borderBottom={true}/>
        </>
    )
}

export default MainScreen;