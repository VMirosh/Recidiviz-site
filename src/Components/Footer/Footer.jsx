import './Footer.css'
import logo from '../../assets/img/footer/logo-footer.svg'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__content">
            <div>
                <a href="#"><img src={logo}/></a>
            </div>
            <p>Terms of Service Privacy  Responsible Disclosure Copyright © 2017-2023, Recidiviz. All Rights Reserved.</p>
        </div>
        </footer>
    )

}
export default Footer;
