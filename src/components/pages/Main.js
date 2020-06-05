//React dependencies
import React, {Component} from 'react';
import Navbar from '../navbar/Navbar.js';

//Components
import Home from './Home.js';
import Projects from './Projects.js';
import Resume from './Resume.js';
import Contact from './Contact.js';

class Main extends Component {
    render() {
        return (
            <div className="grid-container sections">
                <Navbar/>
                <Home/>
                <Projects/>
                <Resume/>
                <Contact/>
            </div>
        );
    }
}



export default Main;