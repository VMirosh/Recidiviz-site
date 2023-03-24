import logoHeader from '../assets/img/header/header-logo.svg'
/*Newspapers*/
import logoNewspapers1 from '../assets/img/main/newspapers/logo_ted.svg'
import logoNewspapers2 from '../assets/img/main/newspapers/logo-nyt.svg'
import logoNewspapers3 from '../assets/img/main/newspapers/logo-ss.svg'
import logoNewspapers4 from '../assets/img/main/newspapers/logo-ap.svg'
import logoNewspapers5 from '../assets/img/main/newspapers/logo-time.svg'
import logoNewspapers6 from '../assets/img/main/newspapers/logo-freethink.svg'
/*Partners*/
import partners01 from '../assets/img/main/partners/partners01.svg'
import partners02 from '../assets/img/main/partners/partners02.svg'
import partners03 from '../assets/img/main/partners/partners03.svg'
import partners04 from '../assets/img/main/partners/partners04.svg'
import partners05 from '../assets/img/main/partners/partners05.svg'
import partners06 from '../assets/img/main/partners/partners06.svg'
/*In press*/
import logoTed from "../assets/img/main/in_press/logo-ted.svg";
import logoCorr from "../assets/img/main/in_press/logo-corr.svg";
import logoCorrOne from "../assets/img/main/in_press/logo-corr-one.svg";
import logoDepartment from "../assets/img/main/in_press/logo-department.svg";
import logoRight from "../assets/img/main/in_press/logo-right.svg";
import logoNews from "../assets/img/main/in_press/logo-the-news.svg";
/*Footer*/
import logoFooter from '../../assets/img/footer/logo-footer.svg'

const state ={
    header: {
        blockLink: "Watch our new TED Talk →",
        top:{
            logo: logoHeader,
            links: ["States","Tools","People","Learn","Donate"],
            login: ["Log In"],
        },
        content:{
            title:"Every person who safely transitions back to the community is a step toward a better society.",
            description:"Criminal justice leaders use Recidiviz to get a real-time picture of their system, diagnose issues, and drive meaningful changes.",
            button:"See our work in action",
        },
        bottom: {
            title:"Trusted in:",
            cities: ["Idaho","Maine","Missouri","North Dakota"," Pennsylvania","Tennessee"],
        }

    },

    main:{
        about:{
            title: "We are a non-profit that partners with state criminal justice agencies to advance their use of data and reduce incarceration.",
            steps:[
                {number: "1", description: "intake an agency’s disjointed data", },
                {number: "2", description: "deploy tools for all levels of decision making", },
                {number: "3", description: "improve outcomes for justice-impacted individuals", },
            ]
        },
        approach:{
            title:"A human–centered definition of success.",
            description: "Our approach is shaped by the perspective and experience of people impacted by the justice system. Together, we are focused on restoring equity and supporting success in the community.",
            button: "Our approach",
        },
        advice:[
            {
            title:"See the forest and the trees.",
            description:"The criminal justice system can't support safe, whole communities without feedback on what’s working and what’s not. We stitch together data from fragmented systems to provide decision-makers with the information they need to improve outcomes. With this data, we surface opportunities to safely chart a path to a smaller system, and to track the impact of policy and practice changes over time.",
        }

        ],
        newspaper:[
            {src: logoNewspapers1, name: "TED Talks",},
            {src: logoNewspapers2, name: "The New York Times",},
            {src: logoNewspapers3, name: "StateScoop",},
            {src: logoNewspapers4, name: "Associated Press",},
            {src: logoNewspapers5, name: "Time",},
            {src: logoNewspapers6, name: "Freethink",},
                  ],
        partners:[partners01,partners02,partners03,partners04,partners05,partners06],
        get:{
            title:"Get the right information to the right person at the right time.",
            article:[
                { title:"For Leaders",
                description:"Set goals, forecast the impact of policy or practice changes, and track their outcomes across your agency."},
                { title:"For Line Staff",
                    description:"Track probation and parole outcomes, see what’s leading to success, and reduce recidivism with our case management system."},
                { title:"For the Public",
                    description:"Use open source code, public data, interactive tools, and data visualizations to understand the state of incarceration, promote accountability, and conduct research."},
                { title:"For Policymakers and Advocates",
                    description:"Project the impact of policies on carceral, fiscal, and community outcomes. Understand where disparities begin, where they grow, and whether a policy is likely to increase or reduce them."},
                ],

        },
        press: {
            top:{
                title:"Recidiviz in the Press",
                 button:"See All",
            },
            headlines:[
                {
                    header:{logo:logoTed, name:"TED Talks",date:" 2.22.22",},
                    article:"Meet the 2022 class of TED Fellows",
                },
                {
                    header:{logo:logoCorr, name:"Correctional News",date:"2.2.22",},
                    article:"New Partnership Aims to Help Transform Prison Conditions",
                },
                {
                    header:{logo:logoDepartment, name:"Department of Justice",date:"1.26.22",},
                    article:"Justice Department Establishes Initiative to Strengthen States’ Use of Criminal Justice Data",
                },
                {
                    header:{logo:logoNews, name:"The New York Times",date:"12.27.21",},
                    article:"The 2021 Good Tech Awards",
                },
                {
                    header:{logo:logoCorrOne, name:"Corrections1",date:"11.18.21",},
                    article:"Maine DOC to better harness correctional data to improve outcomes",
                },
                {
                    header:{logo:logoRight, name:"Right on Crime",date:"9.9.21",},
                    article:"Together, We Can Make Mississippi Safer and Reentry-Ready",
                },
            ],

        },
        work:{
            title:"Where we work",
            description:"We're expanding. Get in touch and start turning your data into action.",
            button:"Get in touch",
        },
        blog: {
            top: {
                title: "Blog Articles",
                button: "See More"
            },
            blogList: [
                { date:"1.11.23",description:"Following through on Bipartisan Criminal Justice Reform",value:"Product",},
                { date:"11.21.22",description:"Creating a More Proactive, Supportive Corrections System",value:"Product",},
                { date:"9.26.22",description:"Employee Spotlight: Joshua Essex, Chief Technology Officer",value:"People",},
                { date:"4.8.22",description:"The consequences of Truth in Sentencing",value:"Research",},


            ],



        },
    },

    footer:{
        logo:logoFooter,
        description:"Terms of Service Privacy  Responsible Disclosure Copyright © 2017-2023, Recidiviz. All Rights Reserved.",

    },
}
 export default state