import "./Section_navigation.css"
import MainLinks from "./MainLink/MainLink";

const Section_navigation =(props)=>{

    return(
        <section className='section__navigation'>
            <div className='navigation__content'>
            <ul className="nav__list">
                {props.navigation.map(link => <MainLinks link = {link}/>)}
            </ul>
            </div>
        </section>
    )
}
export default Section_navigation;