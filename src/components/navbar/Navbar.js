import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div data-sticky-container>
                <div data-sticky className="sticky" data-margin-top="0">
                    <div className="top-bar">
                        <div className="top-bar-left">
                            <ul className="menu" data-magellan data-smooth-scroll>
                                <MagellanComponent name="Home" link="#home"/>
                                <MagellanComponent name="Projects" link="#projects"/>
                                <MagellanComponent name="Resume" link="#resume"/>
                                <MagellanComponent name="Contact" link="#contact"/>
                            </ul>
                        </div>
                    </div>
                </div>
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