import './Main.css'
import Section_about from "./About/Section_about";
import Section_approach from "./Approach/Section_approach";
import Section_advice from "./Advice/Section_advice";
import Section_newspaper from "./Newspaper/Section_newspaper";
import Section_partners from "./Partners/Section_partners";
import Section_get from "./Get/Section_get";
import Section_press from "./Press/Section_press";
import Section_blog from "./Blog/Section_blog";
import Section_work from "./Work/Section_work";




const Main = () => {
    return(
        <main>
            <Section_about/>
            <Section_approach/>
            <Section_newspaper/>
            <Section_advice/>
            <Section_partners/>
            <Section_get/>
            <Section_press/>
            <Section_blog></Section_blog>
            <Section_work></Section_work>

        </main>
     )

}
export default Main;
