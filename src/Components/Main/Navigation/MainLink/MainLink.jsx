import {NavLink} from "react-router-dom";

const MainLinks = (props) => {
    return(
        <NavLink to={props.link.address}>{props.link.name}</NavLink>

    )
}
export default MainLinks;