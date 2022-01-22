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
    <img src="./profile.svg" alt="head shot" width="250px"></img>
)
//Making Connect Box

const connectTop = (<h2>CONNECT WITH TYLER</h2>)
const connectBot = (
    <div className="iconDiv">
        <Icon icon="bi:phone" />
        <Icon icon="carbon:email" />
        <Icon icon="feather:github" />
        <Icon icon="eva:linkedin-fill" />
        <Icon icon="carbon:document-attachment" />

    </div>
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


ReactDOM.render([header, hero, about], document.getElementById("root"));
