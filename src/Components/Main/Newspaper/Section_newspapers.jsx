import './Section_newspaper.css'

const NewspaperBlock = (props)=> {
  return(
         <li className='newspaperLogo'>
             <img src={props.press.svg} />
              <p>{props.press.name}</p>
          </li>
);
}


const Section_newspapers = (props)=>{
    return(
        <section className='section__newspaper'>
          <div className='newspaper__content'>
            <ul>
              {props.newspaper.map(press => <NewspaperBlock press={press}/>)}
            </ul>
          </div>
        </section>
    ) }
export default Section_newspapers
