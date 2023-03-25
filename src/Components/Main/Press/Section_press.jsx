import './Section_press.css'
 const PressTop = (props)=> {
     return (
         <div className="press__top">
             <h2 className="press__title">
                 {props.item.title}
             </h2>
             <div className="press__btn">
                 {props.item.button}
             </div>
         </div>

     );
 };
 const HeadlinePress = (props)=> {
     return(
         <div className="headline">
             <div className="headline__header">
                 <div className="logo">
                     <img src={props.headline.header.logo} alt="ted"/>
                 </div>
                 <div className="name">
                     {props.headline.header.name}
                 </div>
                 <div className="date">
                     {props.headline.header.data}
                 </div>
             </div>
             <p className="headline__article">
                 {props.headline.article}
             </p>

         </div>
     );
 }

const Section_press = (props)=>{

    return(
        <section className='section__press'>
          <div className='press__content'>
              {props.press.top.map(item => <PressTop item={item}/>)}

              <div className="press__headlines">

                  {props.press.headlines.map( headline => <HeadlinePress headline={headline}/>)}
}
              </div>

          </div>
        </section>
    ) }
export default Section_press
