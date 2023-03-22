import './Section_newspaper.css'

import tedNews from '../../../assets/img/main/newspapers/logo_ted.svg'
import newYorkNews from '../../../assets/img/main/newspapers/logo-nyt.svg'
import StateScoopNews from '../../../assets/img/main/newspapers/logo-ss.svg'
import apNews from '../../../assets/img/main/newspapers/logo-ap.svg'
import timeNews from '../../../assets/img/main/newspapers/logo-time.svg'
import freethinkNews from '../../../assets/img/main/newspapers/logo-freethink.svg'

const Section_newspaper = ()=>{
    return(
        <section className='section__newspaper'>
          <div className='newspaper__content'>
            <ul>
              <li className='newspaperLogo'>
                <img src={tedNews} />    
                <p>TED Talks</p>        
              </li>
              <li className='newspaperLogo'>
                <img src={newYorkNews} />    
                <p>The New York Times</p>        
              </li>
              <li className='newspaperLogo'>
                <img src={StateScoopNews}  />    
                <p>StateScoop</p>        
              </li>
              <li className='newspaperLogo'>
                <img src={apNews} />    
                <p>Associated <br/> Press</p>        
              </li>
              <li className='newspaperLogo'>
                <img src={timeNews}  />    
                <p>Time</p>        
              </li>
              <li className='newspaperLogo'>
                <img src={freethinkNews}  />    
                <p>Freethink</p>        
              </li>
              
              
            </ul>


                
          </div>
        </section>
    ) }
export default Section_newspaper
