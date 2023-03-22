import './Section_approach.css'
import image01 from '../../../assets/img/main/people_success/section-success01.png'
import image02 from '../../../assets/img/main/people_success/section-success02.png'
const Section_approach = ()=>{
    return(
        <section className='section__approach'>
          <div className='approach__content'>
            <div className='approach__data' >
              <h3 className='approach__title'>
              A human–centered definition of success.
              </h3>
              <p className='approach__text'>
              Our approach is shaped by the perspective and experience of people impacted by the justice system. Together, we are focused on restoring equity and supporting success in the community.
              </p>
              <div className='btn'>
              Our approach
              </div>
              </div>
              
            <div className='approach__photos'>
                <div><img src={image01} alt="image01" /></div>
                <div><img src={image02} alt="image02" /></div>
                <div></div>
              </div>  
            

                
          </div>
        </section>
    ) }
export default Section_approach
