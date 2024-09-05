import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navbar from "../nav-bar/Navbar";
import MenuList from "../menu-list/MenuList";

const MenuScreen = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <MenuList/>
            <Footer borderBottom={true}/>
        </>
    )
}

export default MenuScreen;