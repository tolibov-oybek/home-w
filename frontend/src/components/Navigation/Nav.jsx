import { Link } from "react-router-dom"

function Nav() {
    return (
        <div className="nav-content">
            <div className="left">
                <Link to={"/"}>Logo</Link>
            </div>
            <div className="middle">
                <Link to={"home"}>Home</Link>
                <Link to={"products"}>Products</Link>
                <Link to={"catagory"}>Catagory</Link>
                <Link to={"about"}>About Us</Link>
            </div>
            <div className="right">
                🧑‍💼🔍🛒
            </div>
        </div>
    );
}

export default Nav;