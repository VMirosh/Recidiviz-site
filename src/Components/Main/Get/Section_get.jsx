import './Section_get.css'
import React from "react";
 import logo from "../../../assets/img/main/logo-get.svg"



const Section_get = ()=>{
    return(
        <section className='section__get'>
            <div className="get__image">
                <img src={logo}></img>
            </div>

          <div className='get__content'>

              <h2 className="get__title">Get the right information to the right person at the right time.</h2>
              <div className="get__articles">
                  <div className="article">
                  <h4>
                      For Leaders
                  </h4>
                  <p>
                      Set goals, forecast the impact of policy or practice changes, and track their outcomes across your agency.
                  </p>
                  </div>
                  <div className="article">
                      <h4>
                          For Line Staff
                      </h4>
                      <p>
                          Track probation and parole outcomes, see what’s leading to success, and reduce recidivism with our case management system.
                      </p>
                  </div>
                  <div className="article">
                      <h4>
                          For the Public
                      </h4>
                      <p>
                          Use open source code, public data, interactive tools, and data visualizations to understand the state of incarceration, promote accountability, and conduct research.
                      </p>
                  </div>
                  <div className="article">
                      <h4>
                          For Policymakers and Advocates
                      </h4>
                      <p>
                          Project the impact of policies on carceral, fiscal, and community outcomes. Understand where disparities begin, where they grow, and whether a policy is likely to increase or reduce them.
                      </p>
                  </div>
              </div>


          </div>
        </section>
    ) }
export default Section_get
