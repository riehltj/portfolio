import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Icon } from '@iconify/react';



const cvHeaderLink = (
    <a href="#PDF" className="cvHeaderLink">
        <h3>TYLER RIEHL'S CV</h3>
    </a>
);

const navIcon = (
    <a href="#nav" className="navIcon">
        <span class="material-icons-outlined">menu</span>
    </a>
);

const navLinks = (
    <div className="navLinks-container">
        <a href="#about" className="navLinks">
            <h3>ABOUT</h3>
        </a>
        <a href="#projects" className="navLinks">
            <h3>PROJECTS</h3>
        </a>
        <a href="#stack" className="navLinks">
            <h3>THE STACK</h3>
        </a>
        <a href="#connect" className="navLinks">
            <h3>CONNECT</h3>
        </a>
        <a href="#hire" className="navLinks">
            <h3>HIRE</h3>
        </a>
    </div>
);

const header = (
    <section id="headerSection">
        <div id="header">
            {cvHeaderLink} {navLinks}
        </div>
    </section>
);
// HERO SECTION
const heroName = (
    <div className="hero-wrapper">
        <h1 className="hero-header fName">TYLER</h1>
        <h1 className="hero-header lName">RIEHL</h1>
        <h2 className="hero-header job">FRONTEND ENGINEER</h2>
    </div>
);

const hero = (
    <section id="heroSection">
        <div id="hero">{heroName}</div>
    </section>
);

//ABOUT SECTION
const bio = (
    <p className="bio">Engineer with 5+ years of experience providing rapid solutions in a development environment. Self-taught Front-End engineer with a strong understanding of software engineering. Combining a problem-solving background with a passion for web development to provide fast reliable solutions to ensure clients needs are met.  </p>
)

const profilePic = (
    <img className="head-shot" src="./profile.svg" alt="head shot"></img>
)
//Making Connect Box

const connectTop = (<h2 className="connectTitle">CONNECT WITH TYLER</h2>)
const connectBot = (
    <div className="iconDiv">
        <a href="tel:440-537-7162" className="icon">
            <Icon icon="bi:phone" />
        </a>
        <a href="mailto:tyler.riehl16@gmail.com" className="icon">
            <Icon className="icon" icon="carbon:email" />
        </a>
        <a href="https://github.com/riehltj" className="icon">
            <Icon className="icon" icon="feather:github" />
        </a>
        <a href="https://www.linkedin.com/in/tylerriehl2016" className="icon">
            <Icon className="icon" icon="eva:linkedin-fill" />
        </a>
        <a href="./public/tylerriehl2021.pdf" className='icon'>
            <Icon className="icon" icon="carbon:document-attachment" />
        </a>

    </div >
)
const connect = (
    <section id="connect">
        <div className="connectTop">{connectTop}</div>
        <div className="connectBot">{connectBot}</div>
    </section>
)
const about = (
    <section id="aboutSection">
        <div id="aboutL"> {bio} {connect}</div>
        <div id="aboutR">{profilePic}</div>
    </section>
)

//Project Section

const projectTitle = (
    <h1 className="projectTitle">PROJECTS</h1>
)
//cards
const learnMoreArrow = (
    <a href="#learnMore" >Learn More <Icon icon="ls:dropdown" /></a>
)
const projectList = [
    { title: "SOS Cat Rescue Redesign", imgUrl: './public/cards/SOSCat.png', link: 'https://riehltj.github.io/SOSCatTucson/', },
];

export default function MyReactComponent() {
    return (
        <>
            {projectList.map(({ title, footer }) => (
                // <p key={coffee}>Coffee type {coffee} in a {size} size.</p>

                <div className="card">
                    <h1 className="card-title" key={title}>{title}</h1>
                    <h1 className="footer">{learnMoreArrow}</h1>
                </div>
            ))}

        </>
    );
}



ReactDOM.render([header, hero, about, <MyReactComponent />], document.getElementById("root"));
