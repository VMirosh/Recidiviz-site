import './Section_blog.css'

const TopBlog = (props) => {
    return(
        <div className="blog__title">
            <h3>{props.item.title}</h3>
            <div> <a href="#">{props.item.button}</a></div>
        </div>
    )
}
const RowTable =(props) => {
    return(
        <tr>
            <td>{props.value.date}</td>
            <td>{props.value.description}</td>
            <td>{props.value.value}</td>
        </tr>
    )
}


const Section_blog = (props)=>{
    return(
        <section className='section__blog'>
          <div className='blog__content'>
              {props.blog.top.map(item => <TopBlog item={item}/>)}
              <table className="blog__list">
                  {props.blog.blogList.map(value => <RowTable value={value}/>)}

              </table>
          </div>
        </section>
    ) }
export default Section_blog
