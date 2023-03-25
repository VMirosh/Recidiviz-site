import './Section_about.css'

const StepAbout =(props)=>{
    return (
        <div className='step'>
            <div>{props.step.number}</div>
            <p>{props.step.description}</p>
        </div>
    )
}
const Section_about = (props)=>{
    return(
        <section className='section__about'>
            <div className='about__content'>

                <h2 className='about__title'>
                    {props.about.title}
                </h2>

                <div className='about__steps' >
                    {props.about.steps.map(step => <StepAbout step = {step} />)}
             </div>
           </div>

        </section>
    ) }
export default Section_about
