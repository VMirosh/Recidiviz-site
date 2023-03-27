import './Header.css'
import BlockLink from "./BlockLink/BlockLink";
import {NavLink} from "react-router-dom";


const Headerlink = (props) => {
    return(
        <NavLink to={props.link.address}>{props.link.name}</NavLink>

    )
}
const Headerlogin = (props) =>{
    return(
        <li><a href="#">{props.data}</a></li>
    )
}


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
                    {props.top.links.map(link => <Headerlink  link = {link}/>)}
                </ul>
                <ul className="nav__login">
                    {props.top.login.map(data => <Headerlogin   data={data}/>)}
                </ul>
            </nav>
            </div>

                <div className="header__content ">
                    <h1 className='content-title'>
                        {props.content.title}
                    </h1>
                    <p className='content-aside'>
                        {props.content.description}
                    </p>
                    <button className="btn">
                        {props.content.button}
                    </button>
                </div>

                <div className="header__bottom">
                    <h4 className='bottom-title'>
                        {props.bottom.title}
                    </h4>
                    <ul className="header__bottom-trusted">
                        {props.bottom.cities.map(data => <BottomItem  data = {data}/>)}
                    </ul>

                </div>
        </div>


        </header>
    )

}
export default Header;
