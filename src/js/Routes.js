import React, {Component} from 'react';
import {Route} from 'react-router-dom';

//Components
import Main from '../components/pages/Main.js';
import Contact from '../components/pages/Contact.js';
import Projects from '../components/pages/Projects.js';
import Resume from '../components/pages/Resume.js';

//Navbar
import Navbar from '../components/navbar/Navbar.js';

class Routes extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                
            </div>
        );
    }
}

export default Routes;