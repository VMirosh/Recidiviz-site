import './Section_blog.css'



const Section_blog = ()=>{
    return(
        <section className='section__blog'>
          <div className='blog__content'>

              <div className="blog__title">
                  <h3>Blog Articles</h3>
                  <div> <a href="#">See More</a></div>

              </div>

              <table className="blog__list">
                  <tr>
                      <td>1.11.23</td>
                      <td>Following through on Bipartisan Criminal Justice Reform</td>
                      <td> Product</td>
                  </tr>
                  <tr>
                      <td>11.21.22</td>
                      <td>Creating a More Proactive, Supportive Corrections System</td>
                      <td>Product</td>
                  </tr>
                  <tr>
                      <td>9.26.22</td>
                      <td>Employee Spotlight: Joshua Essex, Chief Technology Officer</td>
                      <td>Product</td>
                  </tr>
                  <tr>
                      <td>4.8.22</td>
                      <td>The consequences of Truth in Sentencing</td>
                      <td>Product</td>
                  </tr>
              </table>



          </div>
        </section>
    ) }
export default Section_blog
