import './Section_approach.css'
import image01 from '../../../assets/img/main/people_success/section-success01.png'
import image02 from '../../../assets/img/main/people_success/section-success02.png'

const ApproachData = (props)=>{
    return (
        <div className='approach__data' >
            <h3 className='approach__title'>
                {props.article.title}
            </h3>
            <p className='approach__text'>
                {props.article.description}
            </p>
            <div className='btn'>
                {props.article.button}
            </div>
        </div>

    )
}
const Section_approach = (props)=>{
    return(
        <section className='section__approach'>
          <div className='approach__content'>
              {props.approach.map(article => <ApproachData article = {article}/>)}
              
            <div className='approach__photos'>
                <div><img src={image01} alt="image01" /></div>
                <div><img src={image02} alt="image02" /></div>
                <div></div>
              </div>  
            

                
          </div>
        </section>
    ) }
export default Section_approach
