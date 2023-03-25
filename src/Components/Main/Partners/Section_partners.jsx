import './Section_partners.css'
const BarPartners = (props)=>{
    return(
        <li >
            <img src={props.img.image} />
        </li>

    )
}



const Section_partners = (props)=>{
    return(
        <section className='section__partners'>
          <div className='partners__content'>
            <ul className="partners__bar">
                {props.partners.map(img => <BarPartners img={img}/>)}
            </ul>

          </div>
        </section>
    ) }
export default Section_partners
