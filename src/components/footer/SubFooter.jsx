import { Link } from "react-router-dom";

const SubFooter = () => {
    return (
        <div className="footer__subfooter">
            <div className="footer__subfooter__wrapper">
                <div className="footer__subfooter__reserved">
                    © DON LIBA NON 2024 All rights reserved
                </div>
                <Link end="true" to="/" className="header__logo footer__subfooter__logo">DON LIBANON</Link>
                <div className="footer__subfooter__creator">
                    Website development by Maksim
                </div>
            </div>
        </div>
    )
}

export default SubFooter;