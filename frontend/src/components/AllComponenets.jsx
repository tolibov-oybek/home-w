import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./Navigation"
import About from "./About"
import Home from "./Home"
import Catagory from "./Catagory"
import Products from "./Products"
import NoPage from "./NoPage"


function Allcomponents() {
    const location = useLocation();

    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigation />} >
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catagory" element={<Catagory />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default Allcomponents;