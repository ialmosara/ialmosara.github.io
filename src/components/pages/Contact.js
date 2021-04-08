import React, { Component } from 'react';
import GitHubLogo from '../../images/GitHub.png';
import LinkedinLogo from '../../images/Linkedin.png';
import { Element } from 'react-scroll';

class Contact extends Component {
    render() {
        return (
            <Element name='Contact'>
                <div className="grid-container full text-center">
                    <section id="contact" data-magellan-target="contact">
                        <p className="h1 text-center headerText">
                            Contact
                        </p>
                        <a href="https://github.com/ialmosara">
                            <img className="img-responsive icon" src={GitHubLogo} alt="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/immanuel-almosara/">
                            <img className="img-responsive icon" src={LinkedinLogo} alt="Linkedin" />
                        </a>
                    </section >
                </div >
            </Element>
        );
    }
}

export default Contact;