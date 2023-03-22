import './Section_about.css'
const Section_about = ()=>{
    return(
        <section className='section__about'>
            <div className='about__content'>
                <h2 className='about__title'>We are a non-profit that partners with state criminal justice agencies to advance their use of data and reduce incarceration.</h2>
                <div className='about__steps' >
                     <div className='step'>
                 <div>1</div>
                  <p>intake an agency’s disjointed data</p>
                </div>
                <div className='step'>
                    <div>2</div>
                 <p>deploy tools for all levels of decision making</p>
                </div>
                <div className='step'>
                 <div>3</div>
                 <p>improve outcomes for justice-impacted individuals</p>
               </div>
             </div>
           </div>

        </section>
    ) }
export default Section_about
