import React, { Component } from 'react';
import GitHubLogo from '../../images/GitHub.png';
import LinkedinLogo from '../../images/Linkedin.png';

class Contact extends Component {
    render() {
        return (
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
        );
    }
}

export default Contact;