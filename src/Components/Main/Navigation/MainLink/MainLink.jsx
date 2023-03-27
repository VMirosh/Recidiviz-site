import {NavLink} from "react-router-dom";
import './MainLink.module.css'
const MainLinks = (props) => {
    return(
        <NavLink to={props.link.address}>{props.link.name}</NavLink>

    )
}
export default MainLinks;