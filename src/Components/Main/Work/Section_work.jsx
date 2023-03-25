import './Section_work.css'
import logoMap from '../../../assets/img/main/map-american.svg'
const Section_work = (props)=>{
    return(
        <section className='section__work'>
            <div className='work__content'>
                    <h2 className='work__title'>
                        {props.work.title}</h2>
                    <p className="work__text">
                        {props.work.description}</p>
                    <div className="work__btn">{props.work.button}</div>
                 <div className='work__image'>
                     <img src={logoMap}></img>
                 </div>
           </div>

        </section>
    ) }
export default Section_work
