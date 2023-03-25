import './Section_advice.css'
const ArticleAdvice = (props)=>{
    return(
        <div className='advice__data'>
            <h3>{props.article.title}</h3>
            <p>{props.article.description}</p>
        </div>
    )
}
const Section_advice = (props)=>{
    return(
        <section className='section__advice'>
          <div className='advice__content'>
            <div className='advice-aside-left'></div>

              {props.advice.map(article => <ArticleAdvice article={article}/>)}

            <div className='advice-aside-right'></div>

                
          </div>
        </section>
    ) }
export default Section_advice
