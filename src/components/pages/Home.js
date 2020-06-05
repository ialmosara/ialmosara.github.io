import React from 'react';

//Scripts
import '../../js/scripts/typeWriter.js';

//Images
import picOfMe from '../../images/picofme.png';

export const Home = (props) => {
    return (
        <section id="home" data-magellan-target="home">
            <div id="header">
                <p className="h1 headerText text-center">Immanuel Almosara The
                    <span
                        className="txt-type headerText"
                        data-wait="3000"
                        data-words='[" Developer", " Dancer", " Fitness Enthusiast", " Trader", " CS Student", " KidOYO Mentor"]'></span>
                </p>
                <p className="h3 headerText text-center">Software Engineer</p>
            </div>
            <div className="grid-x">
                <img src={picOfMe} id="picofme" alt="Pic Of Me" />
            </div>
            <div className="grid-x grid-margin-x">
                <div className="callout cell medium-4 container">
                    <p className="h3 headerText text-center ">About me</p>
                    <p>
                        My name is Immanuel Almosara, I’m a recent graduate from Stony Brook University studying computer science. I have experience working as a Front end web developer at Stony Brook, where I took ownership of a project which was a microscope simulator used by the biology lab classes which consisted of about ~200 students per semester. I worked in an agile team, maintained its 20+ step tutorial, fixed 35+ bugs and also wrote a script that cut an image into cells and thus reduced SVG load times by 1 to 2 seconds. 
                        <br/>Lately in my free time, I’ve been very eager to learn more about newer technologies so I’ve been working on my own personal project ParaSite - which is a web app that simulates a turn-based social deception game. This project is still in the works but with the time I have spent working on it I managed to get an authentication system working, and I’ve also explored functional code through React Hooks. Most of my front end web development experience is either in React or jQuery but considering that Angular is similar in functionality it wouldn't be difficult for me to get up to speed with other frameworks like Angular or Vue.
 
                    </p>
                </div>
                <div className="callout cell medium-4 container">
                    <p className="h3 headerText text-center">My Career Goals?</p>
                    <p>
                        Now that I've graduated from university - I'm looking to become a web developer (Open to front end/back end/full stack). Most of my experience works with web technologies (specifically React/NodeJS/jQuery).
                    </p>

                </div>
                <div className="callout cell medium-4 container">
                    <p className="h3 headerText text-center">My Hobbies?</p>
                    <p>
                        My hobbies include: Breakdancing, streetwear, programming, video games, and
                        fitness. My interest in dance sparked around the age of 13. I've explored
                        different types of dance including: popping, tutting, c-walking, and now
                        bboying. Growing up I've only really seen it as a small hobby I do on the side,
                        and only really started taking it seriously around August 2017. I've realized
                        that bboying is a hobby that truly makes me happy, and I have a group of friends
                        at my university that share this passion with me. 
                        <br/>Growing up, I've always loved
                        playing video games of various genres, ranging from: MMORPGs to First person
                        shooters to fighting games. Growing up loving them so much sparked my interest
                        in game development, and I decided to make my first game in 9th grade. I made a
                        platformer game in the game engine "Game Maker" and wasn't too sure about how to
                        name it, so I jokingly named it "Super Manny Maker". I vividly remember having
                        the goal of making this game extremely difficult, yet possible. I somewhat
                        managed to achieve this and created 4 levels, and I occasionally like to show
                        this off to my friends. Now I aspire to take these skills to the next level, and
                        so I'm going to try my shot at learning more advanced game engines such as
                        Unity.
                    </p>
                </div>
                <div
                    className="callout cell medium-4 container medium-offset-4 large-4 large-offset-4">
                    <p className="h3 headerText text-center">My skills</p>
                    <p>
                        The programming languages that I use include: ReactJS, NodeJS, MongoDB, Express, Javascript, HTML, CSS,
                        C, Python, Java, SQL, and Assembly MIPS.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;