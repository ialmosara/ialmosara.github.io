import React, {Component} from 'react';
import { Link, animateScroll as scroll} from "react-scroll";

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <Link to='Home' smooth={true} duration={1000} offset={-100} className='navbar-links'>Home</Link>
                <Link to='Projects' smooth={true} duration={1000} offset={-50} className='navbar-links'>Projects</Link>
                <Link to='Resume' smooth={true} duration={1000} offset={-50} className='navbar-links'>Resume</Link>
                <Link to='Contact' smooth={true} duration={1000} offset={-50} className='navbar-links'>Contact</Link>

            </div>
        )
    }
}

export const MagellanComponent = (props) => {
    return (
        <li>
            <a href={props.link}>{props.name}</a>
        </li>
    )
}

export default Navbar;