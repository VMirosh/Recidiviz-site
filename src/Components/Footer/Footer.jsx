import './Footer.css'
const Footer = (props) => {
    return(
        <footer className="footer">
            <div className="footer__content">
            <div>
                <a href="#"><img src={props.attribute.logo}/></a>
            </div>
            <p> {props.attribute.description}</p>
        </div>
        </footer>
    )

}
export default Footer;
