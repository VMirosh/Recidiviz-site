import './Section_press.css'

import logoTed from "../../../assets/img/main/in_press/logo-ted.svg";
import logoCorr from "../../../assets/img/main/in_press/logo-corr.svg";
import logoCorrOne from "../../../assets/img/main/in_press/logo-corr-one.svg";
import logoDepartment from "../../../assets/img/main/in_press/logo-department.svg";
import logoRight from "../../../assets/img/main/in_press/logo-right.svg";
import logoNews from "../../../assets/img/main/in_press/logo-the-news.svg";



const Section_press = ()=>{
    return(
        <section className='section__press'>
          <div className='press__content'>
              <div className="press__top">
                  <h2 className="press__title">
                      Recidiviz in the Press
                  </h2>
                  <div className="press__btn">
                      See All
                  </div>
              </div>

              <div className="press__headlines">

                  <div className="headline">
                      <div className="headline__header">
                          <div className="logo">
                              <img src={logoTed} alt="ted"/>
                          </div>
                          <div className="name">
                              TED Talks
                          </div>
                          <div className="date">
                              2.22.22
                          </div>
                      </div>
                      <p>
                          Meet the 2022 class of TED Fellows
                      </p>

                  </div>

                  <div className="headline">
                      <div className="headline__header">
                          <div className="logo">
                              <img src={logoCorr} alt="Correctional"/>
                          </div>
                          <div className="name">
                              Correctional News
                          </div>
                          <div className="date">
                              2.2.22
                          </div>
                      </div>
                      <p>
                          New Partnership Aims to Help Transform Prison Conditions
                      </p>

                  </div>

                  <div className="headline">
                      <div className="headline__header">
                          <div className="logo">
                              <img src={logoDepartment} alt="Department"/>
                          </div>
                          <div className="name">
                              Department of Justice
                          </div>
                          <div className="date">
                              1.26.22
                          </div>
                      </div>
                      <p>
                          Justice Department Establishes Initiative to Strengthen States’ Use of Criminal Justice Data
                      </p>

                  </div>

                  <div className="headline">
                      <div className="headline__header">
                          <div className="logo">
                              <img src={logoNews} alt=" The New York Times"/>
                          </div>
                          <div className="name">
                              The New York Times
                          </div>
                          <div className="date">
                              12.27.21
                          </div>
                      </div>
                      <p>
                          The 2021 Good Tech Awards
                      </p>

                  </div>

                  <div className="headline">
                      <div className="headline__header">
                          <div className="logo">
                              <img src={logoCorrOne} alt="Corrections1"/>
                          </div>
                          <div className="name">
                              Corrections1
                          </div>
                          <div className="date">
                              11.18.21
                          </div>
                      </div>
                      <p>
                          Maine DOC to better harness correctional data to improve outcomes
                      </p>

                  </div>

                  <div className="headline">
                      <div className="headline__header">
                          <div className="logo">
                              <img src={logoRight} alt ="Right on Crime"/>
                          </div>
                          <div className="name">
                              Right on Crime
                          </div>
                          <div className="date">
                              9.9.21
                          </div>
                      </div>
                      <p>
                          Together, We Can Make Mississippi Safer and Reentry-Ready
                      </p>

                  </div>
              </div>

          </div>
        </section>
    ) }
export default Section_press
