import './Section_work.css'
import logoMap from '../../../assets/img/main/map-american.svg'
const Section_work = ()=>{
    return(
        <section className='section__work'>
            <div className='work__content'>
                    <h2 className='work__title'>Where we work</h2>
                    <p className="work__text">
                        We're expanding. Get in touch and start turning your data into action.</p>
                    <div className="work__btn">Get in touch</div>
                 <div className='work__image'>
                     <img src={logoMap}></img>
                 </div>
           </div>

        </section>
    ) }
export default Section_work
