import Header from "../header/Header";
import Contacts from "../contacts/Contacts";
import Footer from "../footer/Footer";

const ContactsScreen = () => {
    return (
        <>
            <Header/>
            <Contacts/>
            <Footer borderBottom={true}/>
        </>
    )
}

export default ContactsScreen;