import './Main.css'
import Section_about from "./About/Section_about";
import Section_approach from "./Approach/Section_approach";
import Section_advice from "./Advice/Section_advice";
import Section_newspaper from "./Newspaper/Section_newspaper";
import Section_partners from "./Partners/Section_partners";



const Main = () => {
    return(
        <main>
            <Section_about/>
            <Section_approach/>
            <Section_newspaper/>
            <Section_advice/>
            <Section_partners></Section_partners>



        </main>
    )

}
export default Main;
