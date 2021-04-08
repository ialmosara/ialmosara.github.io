import React from 'react';
import { Element } from 'react-scroll';

//Scripts
import '../../js/scripts/typeWriter.js';

//Images
import picOfMe from '../../images/picofme.png';

export const Home = (props) => {
    return (
        <Element name='Home'>
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
                            My name is Immanuel Almosara, I’m a recent graduate (as of Fall 2019) from Stony Brook University studying computer science. I'm currently 23 years old and I'm currently working as a Quantitative Developer intern at <a href='https://www.accrue.com/' className='homeLink'>Accrue.com!</a>
                            <br/><br/>Lately in my free time, I’ve been very eager to learn more about newer technologies so after connecting with Accrue.com, I've been working on a new project with my boss that 
                            takes options from the stock market, analyzes its order flow and utilizes that in conjunction with an algorithm we use to generate signals and find good opportunities to buy and sell! This project is shipped out on the <a href='https://ninjatrader.com/LP/NT8_Future/Introducing-NinjaTrader-8' className='homeLink'>Ninjatrader 8</a> trading platform (which primarily uses C#), I use Flask (Python) for the backend to do all the calculations and for data I use <a href='https://questdb.io/' className='homeLink'>QuestDB</a> (A SQL-based database that is focused on time-series data)
    
                        </p>
                    </div>
                    <div className="callout cell medium-4 container">
                        <p className="h3 headerText text-center">My Career Goals?</p>
                        <p>
                            I've always had an interest in the stock market, and now that I've graduated from university and gotten some experience working closely in this field - I've developed an interest to work in Quantitiative Finance.
                            I also have experience working as a web developer (Open to front end/back end/full stack). Most of my web experience works with React/NodeJS/jQuery.
                        </p>

                    </div>
                    <div className="callout cell medium-4 container">
                        <p className="h3 headerText text-center">My Hobbies?</p>
                        <p>
                            My hobbies include: Breakdancing, Streetwear, Programming, Video Games,
                            Fitness, and Basketball. My interest in dance sparked around the age of 13. I've explored
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
                            The programming languages that I specialize in include: Python, C#, ReactJS, NodeJS, MongoDB, Express, Javascript, HTML, CSS,
                            C, Java, and Assembly MIPS.
                        </p>
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default Home;