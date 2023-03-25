import './Header.css'
// import logo from '../../assets/img/header/header-logo.svg'

const Headerlink = (props) => {
    return(
        <li><a href="#">{props.link}</a></li>
    )
}
const Headerlogin = (props) =>{
    return(
        <li><a href="#">{props.data}</a></li>
    )
}
const BlockLink =(props) =>{
    return(
        <a href="#">{props.data}</a>
    )
};

const BottomItem = (props) =>{
    return(
        <li>{props.data}</li>

    )
};


const Header = (props) => {

    return(
        <header className="header">

            <div className="header__link">
                <BlockLink data={props.blockLink}></BlockLink>
            </div>

            <div className="container">
            <div className="header__top">
            <nav className="nav">
                <div className="nav__logo">
                    <a href="#"><img src={props.top.logo} alt="logo" className="logo"/></a>
                </div>
                <ul className="nav__list">
                    {props.top.links.map(link => <Headerlink link = {link}/>)}
                </ul>
                <ul className="nav__login">
                    {props.top.login.map(data => <Headerlogin data= {data}/>)}
                </ul>
            </nav>
            </div>

                <div className="header__content">
                    <h1 className='content-title'>
                        {props.content.title}
                    </h1>
                    <p className='content-aside'>
                        {props.content.description}
                    </p>
                    <div className="btn">
                        {props.content.button}
                    </div>
                </div>

                <div className="header__bottom">
                    <h4 className='bottom-title'>
                        {props.bottom.title}
                    </h4>
                    <ul className="header__bottom-trusted">
                        {props.bottom.cities.map(data => <BottomItem data = {data}/>)}
                    </ul>

                </div>
        </div>


        </header>
    )

}
export default Header;
