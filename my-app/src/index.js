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
const projectList = [
    {
        id: 0,
        header: "SOS CAT Tucson",
        img: "/cards/SOSCat.png",
        src: "https://riehltj.github.io/SOSCatTucson/",
        alt: "SOS Cat Web - Screenshot",
    },
    {
        id: 1,
        header: "SOS CAT Tucson",
        img: "/cards/motivation ss.png",
        src: "https://riehltj.github.io/SOSCatTucson/",
        alt: "SOS Cat Web - Screenshot",
    },
    {
        id: 2,
        header: "SOS CAT Tucson",
        img: "/cards/watch img.png",
        src: "https://riehltj.github.io/SOSCatTucson/",
        alt: "SOS Cat Web - Screenshot",
    },
    {
        id: 3,
        header: "SOS CAT Tucson",
        img: "/cards/todo img.png",
        src: "https://riehltj.github.io/SOSCatTucson/",
        alt: "SOS Cat Web - Screenshot",
    },
]


const Cards = () => {
    return (
        <div className="card-container">
            {projectList.map((project) => (
                <div className='card'>
                    <h1 className="header">{project.header}</h1>
                    <a href={project.src}>
                        <img alt={project.alt} width='50' src={process.env.PUBLIC_URL + project.img}></img>

                    </a>
                    <h1 id={project.id}>Learn More <Icon icon="gridicons:dropdown" /></h1>
                </div>
            ))
            }
        </div >
    );
};

//MY STACK SECTION


const frontEndStack = [
    {
        icon: 'akar-icons:html-fill',
        text: "html",
    },
    {
        icon: 'akar-icons:css-fill',
        text: "css",
    },
    {
        icon: 'fa-brands:js-square',
        text: "js",
    },
    {
        icon: 'akar-icons:sass-fill',
        text: "sass",
    },
    {
        icon: 'akar-icons:react-fill',
        text: "react",
    },
]

const Frontend = () => {
    return (
        <div className='frontend-container'>
            <h1>FRONTEND</h1>

            {frontEndStack.map((tech) => (
                <div className='frontend-box'>
                    <Icon icon={tech.icon}></Icon>
                    <h3>{tech.text}</h3>
                </div>
            ))}
        </div>
    )
}

const designCMS = [
    {
        icon: 'akar-icons:figma-fill',
        text: "figma",
    },
    {
        icon: 'cib:adobe-photoshop',
        text: "ps",
    },
    {
        icon: 'file-icons:gimp',
        text: "gimp",
    },
    {
        icon: 'akar-icons:vscode-fill',
        text: "vscode",
    },
    {
        icon: 'simple-icons:contentful',
        text: "contentful",
    },
]

const Design = () => {
    return (
        <div className='design-container'>
            <h1>DESIGN / CMS</h1>

            {designCMS.map((tech) => (
                <div className='design-box'>
                    <Icon icon={tech.icon}></Icon>
                    <h3>{tech.text}</h3>
                </div>
            ))}
        </div>
    )
}

const backend = [
    {
        icon: 'akar-icons:node-fill',
        text: "node js",
    },
    {
        icon: 'simple-icons:express',
        text: "express",
    },
    {
        icon: 'bxl:netlify',
        text: "netlify",
    },
    {
        icon: 'bxl:php',
        text: "php",
    },
    {
        icon: 'akar-icons:python-fill',
        text: "python",
    },
]

const Backend = () => {
    return (
        <div className='backend-container'>
            <h1>BACKEND</h1>
            {backend.map((tech) => (
                <div className='backend-box'>
                    <Icon icon={tech.icon}></Icon>
                    <h3>{tech.text}</h3>
                </div>
            ))}
        </div>
    )
}

const Connect = () => {
    // add form information followed by icons

}










ReactDOM.render([header, hero, about, <Cards />, <Frontend />, <Design />, <Backend />], document.getElementById("root"));
