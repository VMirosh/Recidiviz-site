import './Header.css'
import logo from '../../assets/img/header/header-logo.svg'



const Header = () => {
    return(
        <header className="header">
            <div className="header__link">
                <a href="#">Watch our new TED Talk →</a>
            </div>
            <div className="container">
            <div className="header__top">
            <nav className="nav">
                <div className="nav__logo">
                    <a href="#"><img src={logo} alt="logo" className="logo"/></a>
                </div>
                <ul className="nav__list">
                    <li><a href="#">States</a></li>
                    <li><a href="#">Tools</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Learn More</a></li>
                    <li><a href="#">Donate</a></li>
                    <li className="nav__login">
                        <a href="#">Log In</a>
                    </li>
                </ul>
            </nav>
            </div>
                <div className="header__content">
                    <h1 className='content-title'> Every person who safely transitions back to the community is a step toward a better society.</h1>
                    <p className='content-aside'>Criminal justice leaders use Recidiviz to get a real-time picture of their system, diagnose issues, and drive meaningful changes.</p>
                    <div className="btn">See our work in action</div>
                </div>
                <div className="header__bottom">
                    <h4 className='bottom-title'>Trusted in:</h4>
                    <ul className="header__bottom-trusted">
                        <li>Idaho</li>
                        <li>Maine</li>
                        <li>Missouri</li>
                        <li>North Dakota</li>
                        <li>Pennsylvania</li>
                        <li>Tennessee</li>
                    </ul>

                </div>
        </div>


        </header>
    )

}
export default Header;
