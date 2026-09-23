import { Link } from "react-router-dom";


const Navbar = ()=>{

    return (<>

        <div className="header">
            <div>
                <img src="src/components/images/Screenshot 2026-09-20 155402.png" alt="" width="100px"/>
            </div>
            <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/help">Help</Link>
        </div>
        </div>

    </>)
}
export default Navbar;