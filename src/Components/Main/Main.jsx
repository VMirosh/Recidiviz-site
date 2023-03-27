import './Main.css'
import Section_about from "./About/Section_about";
import Section_approach from "./Approach/Section_approach";
import Section_advice from "./Advice/Section_advice";
import Section_newspapers from "./Newspaper/Section_newspapers";
import Section_partners from "./Partners/Section_partners";
import Section_get from "./Get/Section_get";
import Section_press from "./Press/Section_press";
import Section_blog from "./Blog/Section_blog";
import Section_work from "./Work/Section_work";
import {Route, Routes} from "react-router-dom";
import Section_navigation from "./Navigation/Section_navigation";




const Main = (props) => {
    return(
        <main>
            <Section_navigation navigation={props.attribute.navigation}></Section_navigation>
            <Routes>
                <Route path = "/" element={<Section_about about={props.attribute.about}/>}/>
                <Route path = "/press"   element={<Section_press press={props.attribute.press}/>}/>
                <Route path = "/people" element={<Section_approach  approach={props.attribute.approach}/>}/>
                <Route path = "/work" element={ <Section_work work={props.attribute.work}/>}/>
                <Route path = "/blog" element={ <Section_blog blog={props.attribute.blog}/>}/>
            </Routes>

            {/*<Section_about about={props.attribute.about}/>*/}
            {/*<Section_approach  approach={props.attribute.approach}/>*/}
            <Section_newspapers  newspaper={props.attribute.newspaper}/>
            <Section_advice advice={props.attribute.advice}/>
            <Section_partners  partners={props.attribute.partners}/>
            <Section_get get={props.attribute.get} />
            {/*<Section_press press={props.attribute.press}/>*/}
            {/*<Section_blog blog={props.attribute.blog}/>*/}
            {/*<Section_work work={props.attribute.work}/>*/}

        </main>
     )

}
export default Main;
