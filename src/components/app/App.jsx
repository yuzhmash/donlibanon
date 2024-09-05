import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import ScrollToTop from "../scroll/ScrollToTop"
import MainScreen from "../pages/MainScreen";
import ContactsScreen from "../pages/ContactsScreen";
import MenuScreen from "../pages/MenuScreen";
import FeedbackScreen from "../pages/FeedbackScreen";
import FeedbackMessageScreen from "../pages/FeedbackMessageScreen";
import Hamburger from "../hamburger/hamburger";



const App = () => {
    return (
        <>
        <Router>
            <ScrollToTop/>
            <Hamburger/>
            <Routes>
                <Route path="/" element={<MainScreen/>}/>
                <Route path="/contacts" element={<ContactsScreen/>}/>
                <Route path="/menu" element={<MenuScreen/>}/>
                <Route path="/feedback" element={<FeedbackScreen/>}/>
                <Route path="/thanks-reviews" element={<FeedbackMessageScreen/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default App;