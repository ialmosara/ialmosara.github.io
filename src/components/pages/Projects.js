import React, {Component} from 'react';

class Projects extends Component {
    render() {
        return (
            <section id="projects" data-magellan-target="projects">
                <p className="h1 text-center headerText">
                    Projects
                </p>
                <ProjectComponent 
                header="ParaSite" 
                link="https://github.com/jaw0608/ParaSite" 
                description="ParaSite is a turn based post-apoclyptic themed social deception game. During my last semester of university, 
                I along with two other engineers paired up and brainstormed this idea because we're super eager to learn about new technologies to help us better prepare for the working world.
                Most importantly above everything else, we wanted to create a project that would actually be fun to develop to keep us motivated. We took inspiration from the popular online game Town of Salem along with Werewolf. After coming up with the concept,
                taking a closer look revealed a ton of learning opportunities so we split up the work and began coding."/>

                <ProjectComponent
                header="Microscope Simulator"
                link="https://github.com/TLTMedia/Microscope"
                description="Simulator built to teach biology students how to use a microscope. During the year of working on this project, I took ownership of a project which was a microscope simulator used by the biology lab classes which consisted of about ~200 students per semester. I worked in an agile team, maintained its 20+ step tutorial, fixed 35+ bugs and also wrote a script that cut an image into cells and thus reduced SVG load times by 1 to 2 seconds."/>
                <ProjectComponent
                    header="Mannys SC2 Bot"
                    link="https://github.com/ialmosara/MannysSC2Bot"
                    description="Mannys SC2 Bot is a python script using the “python sc2” API where an AI I
                        created plays the game Starcraft II. This bot is currently still in development,
                        but is skilled enough to defeat Medium-leveled Blizzard AI. Eventually I plan to
                        implement deep learning into this program to have it improve at a much faster
                        rate."/>
                <ProjectComponent
                    header="Flap Flap Revolution"
                    link="https://github.com/judy0501/Flap-Flap-Revolution"
                    description="Flap Flap Revolution is a game that myself along with three other people have worked on at SBUHacks 2018. This has been programmed using the Unity Game Engine, and the user must play the game entirely by using their voice. "/>
                <ProjectComponent
                    header="Re;Define"
                    link="https://github.com/bvalarezo/SBUHacks2019"
                    description=" Re:Define is a Web app created at SBUHacks 2019 that takes a machine learning python script, taking in two images as arguments and extracts the style of one image and adds it to the content of another image. In our case we had the content image be the user taking a live photo of themselves, sent it to the backend to have it run through the script, and out would come the modified photo with the user's new photo in the style of a random famous artist. This was programmed using HTML, CSS, Javascript, and Python (Flask backend). "/>

            </section>
        );
    }
}

export const ProjectComponent = (props) => {
    return (
        <div className="callout container">
            <a href={props.link} className="h3 text-left headerText">
                {props.header}
            </a>
            <p>
                {props.description}
            </p>
        </div>
    )
}

export default Projects;