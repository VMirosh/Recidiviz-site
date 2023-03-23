import './Section_partners.css'

import partners01 from '../../../assets/img/main/partners/partners01.svg'
import partners02 from '../../../assets/img/main/partners/partners02.svg'
import partners03 from '../../../assets/img/main/partners/partners03.svg'
import partners04 from '../../../assets/img/main/partners/partners04.svg'
import partners05 from '../../../assets/img/main/partners/partners05.svg'
import partners06 from '../../../assets/img/main/partners/partners06.svg'

const Section_partners = ()=>{
    return(
        <section className='section__partners'>
          <div className='partners__content'>
            <ul className="partners__bar">

              <li >
                <img src={partners01} />

              </li>
              <li >
                <img src={partners02} />

              </li>
              <li >
                <img src={partners03}  />

              </li>
              <li >
                <img src={partners04} />

              </li>
              <li >
                <img src={partners05}  />

              </li>
              <li >
                <img src={partners06}  />

              </li>


            </ul>

          </div>
        </section>
    ) }
export default Section_partners
