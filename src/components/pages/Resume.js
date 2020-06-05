import React, {Component} from 'react';
import ResumeDoc from '../../documents/Resume.pdf';

class Resume extends Component {
    render() {
        return (
            <section id="resume" data-magellan-target="resume">
                <div>
                    <p className="h1 text-center headerText">
                        Resume
                    </p>
                    <div className="grid-x">
                        <iframe
                            title="resume"
                            className="cell small-12 medium-12 large-12"
                            src={ResumeDoc}
                            height="1000px"
                            width="80%"
                            frameBorder="0"></iframe>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;