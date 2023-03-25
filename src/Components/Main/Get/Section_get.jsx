import './Section_get.css'
import React from "react";
 import logo from "../../../assets/img/main/logo-get.svg";

const ArticleBlock =(props) =>{
     return(
         <div className="article">
             <h4>
                 {props.art.title}
             </h4>
             <p>
                 {props.art.description}
             </p>
         </div>
     );
};

const Section_get = (props)=>{
    return(
        <section className='section__get'>
            <div className="get__image">
                <img src={logo}></img>
            </div>

          <div className='get__content'>

              <h2 className="get__title">
                  {props.get.title}
              </h2>
              <div className="get__articles">
                  {props.get.article.map(art => <ArticleBlock art={art}></ArticleBlock> )}
              </div>


          </div>
        </section>
    ) }
export default Section_get
