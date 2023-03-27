import './Section_blog.css'
import TopBlog from "./TopBlog/TopBlog";
import RowTable from "./RowTable/RowTable";
import {useState} from "react";
const Section_blog = (props)=>{

    let [row,setRow] = useState(props.blog.blogList.map(value => <RowTable value={value}/>));



    return(
        <section className='section__blog'>
          <div className='blog__content'>
              {props.blog.top.map(item => <TopBlog item={item}/>)}
              <table className="blog__list">
                  {row}
              </table>
          </div>
        </section>
    ) }
export default Section_blog
