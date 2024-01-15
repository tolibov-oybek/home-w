import "./style.scss"
import {Outlet} from "react-router-dom"
import Nav from "./Nav.jsx"
import Footer from "../Footer"

function Navigation() {
    return ( 
        <div className="navigation-wrapper">
            <header><Nav/></header>
            <Outlet/>
            
        </div>
     );
}

export default Navigation;