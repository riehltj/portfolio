import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@iconify/react';
import emailjs from '@emailjs/browser';
import "./style.css";

const cvHeaderLink = (
    <a href={process.env.PUBLIC_URL + "TylerJRiehl2022.pdf"} download className="cvHeaderLink">
        <h3>TYLER RIEHL'S CV</h3>
    </a>
);

const NavIcon = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <nav className="navBar">
            <button onClick={handleToggle}>{navbarOpen ? <Icon style={{ transform: 'rotate(90deg)' }} icon="charm:menu-hamburger" />
                : <Icon icon="charm:menu-hamburger" />
            }</button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <a href="#aboutSection" className="navLinks" onClick={() => closeMenu()}>
                    <h3>ABOUT</h3>
                </a>
                <a href="#projects" className="navLinks" onClick={() => closeMenu()}>
                    <h3>PROJECTS</h3>
                </a>
                <a href="#stack" className="navLinks" onClick={() => closeMenu()}>
                    <h3>THE STACK</h3>
                </a>
                <a href="#connect" className="navLinks" onClick={() => closeMenu()}>
                    <h3>CONNECT</h3>
                </a>
                <a href={process.env.PUBLIC_URL + "TylerJRiehl2022.pdf"} className="navLinks" onClick={() => closeMenu()}>
                    <h3>RESUME</h3>
                </a>
            </ul>

        </nav >
    )

};

const navLinks = (
    <div className="navLinks-container">
        <a href="#aboutSection" className="navLinks">
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
        <a href="mailto:tyler.riehl16@gmail.com" target="_blank" className="icon">
            <Icon className="icon" icon="carbon:email" />
        </a>
        <a href="https://github.com/riehltj" target="_blank" className="icon">
            <Icon className="icon" icon="feather:github" />
        </a>
        <a href="https://www.linkedin.com/in/tylerriehl2016" target="_blank" className="icon">
            <Icon className="icon" icon="eva:linkedin-fill" />
        </a>
        <a href={process.env.PUBLIC_URL + "/TylerJRiehl2022.pdf"} download className='icon'>
            <Icon className="icon" icon="carbon:document-attachment" />
        </a>

    </div >
)
const connect = (
    <section id="small-connect">
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
let projectList = [
    {
        id: 0,
        header: "SOS CAT Tucson",
        img: "/cards/sosCat_ss.png",
        src: "https://happy-fermi-406b5b.netlify.app/",
        alt: "SOS Cat Website Screenshot",
        overview: {
            header: "Overview",
            text: "This project worked with a local non-profit cat rescue in Tucson AZ. Developing a UI/UX scheme using figma, followed up by a client meeting to discuss changes to the design. Following approval of the design the Frontend and CMS integration was completed. After training the staff on the use of the CMS the final PHP email notification was developed to ensure all data was sent the way they wanted it.",
            image: "",
            icon: "",
        }
    },
    {
        id: 1,
        header: "Motivation App",
        img: "/cards/motivation_ss.png",
        src: "https://relaxed-hermann-78dd8e.netlify.app/",
        alt: "Motivation Bot Screenshot",
        overview: {
            header: "Overview",
            text: "This project was developed in order to get a full understanding of Fetch and REST API calling. The secondary achievement was a 100% lighthouse score, the application uses location API and some fun motivational quotes to give the user the motivation they need during the day. Finally a water tracker was developed using custom CSS to make the water drain from the cup every sip, overall a really fun project to work on. ",
            image: "",
            icon: "",
        },
    },
    {
        id: 2,
        header: "iOS Watch App",
        img: "/cards/watch_cloud_ss.png",
        src: "https://riehltj.github.io/SunscreenApp/",
        alt: "Sunscreen App - Screenshot",
        overview: {
            header: "Overview",
            text: "This project was my first private client, they wanted to develop a iOS watch app that would let the user know when they should reapply sunscreen based on the weather around the user. I researched and developed a estimated time of application table. Javascript uses this table as well as live weather data from the user to estimate the time needed until reapplication. The timer UI was built with vanialla javascript to better understand the technology.",
            image: "",
            icon: "",
        },
    },
    {
        id: 3,
        header: "Raytheon Core Survey",
        img: "/cards/raytheon image.png",
        src: "https://riehltj.github.io/gate5Collab/main.html",
        alt: "Raytheon Core - Screenshot",
        overview: {
            header: "Overview",
            text: "This project was my first professional project, while working as a propulsion engineer. I developed the entire survey frontend with a working sharepoint site to deliver supploer data to the customer. The backend team used the information to generate informational packets that were sent out to design engineers.",
            image: "",
            icon: "",
        },
    },
    {
        id: 4,
        header: "To Do App",
        img: "/cards/todo img.png",
        src: "https://wizardly-edison-54231c.netlify.app/",
        alt: "To do app - Screenshot",
        overview: {
            header: "Overview",
            text: "This project was the first project I created, to demonstrate the learning I acquired after my bootcamp.",
            image: "",
            icon: "",
        },
    },
    {
        id: 5,
        header: "NonProfit Cat Design",
        img: "/cards/cat_ss.png",
        src: "https://www.figma.com/proto/qw6epsm0cCKk52LwkxU45e/SOS-Cat-Tucson?node-id=312%3A4&scaling=scale-down&page-id=312%3A3&starting-point-node-id=312%3A4&show-proto-sidebar=1",
        alt: "Cat Mobile Design",
        overview: {
            header: "Overview",
            text: "This was the initial UI/UX of the SOS Cat Rescue website above, it is a functional demo that allowed the creation of the website. If you click on Earl you can see how the demo was showed to the client.",
            image: "",
            icon: "",
        },
    },
    {
        id: 6,
        header: "Mock Website Design",
        img: "/cards/handyman_ss.png",
        src: "https://www.figma.com/proto/38JWirp4gFsF7cSoUa5hM2/Handy-Man?node-id=2%3A2&starting-point-node-id=2%3A2&show-proto-sidebar=1",
        alt: "A handyman mobile design",
        overview: {
            header: "Overview",
            text: "This project is an ongoing effort to become a SEO expert. I am currently building this to ensure a very fast low speed while optimizing imagery. More information to come.",
            image: "",
            icon: "",
        },
    },
]

const Cards = () => {

    return (
        <section id='projects'>
            <h1 className='project-title'>PROJECTS</h1>
            <div className="project-container">
                {projectList.map((project) => (
                    < div className="card-container" >
                        <div className='card' id={project.id}>
                            <h1 className="header">{project.header}</h1>
                            <a href={project.src}>
                                <img alt={project.alt} width='50' src={process.env.PUBLIC_URL + project.img}></img>
                            </a>
                            <a href={"#" + project.id} className="learn-btn"> <h1> Learn More <Icon id="dropdown-target" rotate="0deg" icon="gridicons:chevron-down" /></h1></a>
                        </div>

                        <div className="dropdown-list flex hide">
                            <div className="dropdown-card">
                                <h1>{project.overview.header}</h1>
                                <p>{project.overview.text}</p>
                                <img width='50' src={process.env.PUBLIC_URL + project.overview.image}></img>
                                <Icon icon={project.overview.icon}></Icon>
                                {console.log(project.overview)}
                            </div>
                        </div>

                    </div>
                )
                )}




            </div >
        </section >
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
        text: "cms",
    },
]



const backend = [
    {
        icon: 'akar-icons:node-fill',
        text: "node",
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
const Frontend = () => {
    return (
        <div className='stack-container'>
            <h1>FRONTEND</h1>
            <div className="boxes-container">

                {frontEndStack.map((tech) => (
                    <div className='box'>
                        <Icon icon={tech.icon}></Icon>
                        <h3>{tech.text}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
const Design = () => {
    return (
        <div className='stack-container'>
            <h1>DESIGN / CMS</h1>
            <div className="boxes-container">

                {designCMS.map((tech) => (
                    <div className='box'>
                        <Icon icon={tech.icon}></Icon>
                        <h3>{tech.text}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
const Backend = () => {
    return (
        <div className='stack-container'>
            <h1>BACKEND</h1>
            <div className="boxes-container">
                {backend.map((tech) => (
                    <div className='box'>
                        <Icon className="stack-icon" icon={tech.icon}></Icon>
                        <h3>{tech.text}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}

const MyStack = () => {
    return (
        <section id='stack'>
            <h1>The Stack</h1>
            <div>{<Frontend />} {<Design />} {<Backend />}</div>
        </section>
    )
}

const Connect = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bhjetju', 'template_pp7hr9g', form.current, 'frrYDDb8P63OH1l1V')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (<div id="connect" className='contact-info-container'>
        <h1>CONNECT WITH TYLER</h1>
        <form ref={form} onSubmit={sendEmail}>

            <div className='contact-info-top'>
                <input id="name" placeholder="name" name="from_name" type='text'></input>
                <input id="email" placeholder="email" name="from_email" type='email'></input>
            </div>
            <input id="subject" placeholder='subject' name="subject" type='text'></input>
            <textarea id="message" placeholder='message' name="message"></textarea>
            <input type="submit" value="send" />
        </form>
    </div>
    );
};

const ContactIcons = [
    {
        icon: 'carbon:email',
        href: 'mailto:tyler.riehl16@gmail.com',
    },
    {
        icon: 'bi:phone',
        href: 'tel:4405377162',
    },
    {
        icon: 'feather:github',
        href: 'https://github.com/riehltj',
    },
    {
        icon: 'eva:linkedin-fill',
        href: "https://www.linkedin.com/in/tylerriehl2016/",
    },
    {
        icon: 'carbon:document-download',
        href: process.env.PUBLIC_URL + "/TylerJRiehl2022.pdf",
    }

]

const Contact = () => {
    return (
        <div className='contact-buttons'>
            {ContactIcons.map((index) => (
                <a target="_blank" href={index.href} download className='hex'>
                    <Icon icon={index.icon}></Icon>
                </a>
            ))}
        </div>
    )
}



const Footer = () => {
    return (
        <footer>
            <h4>BUILT WITH REACT</h4>
        </footer>
    )
}

ReactDOM.render([header, <NavIcon />, hero, about, <Cards />, <MyStack />, <Connect />, <Contact />, <Footer />], document.getElementById("root"));


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// listening to "learn more"
document.querySelectorAll('.learn-btn').forEach(item => {
    item.addEventListener('click', event => {

        if (item.parentElement.nextElementSibling.classList.contains('hide')) {
            item.parentElement.nextElementSibling.classList.remove('hide')
            item.parentElement.nextElementSibling.classList.add('show')
            let arrow = item.childNodes[1].childNodes[1];
            arrow.style = "transform: rotate(180deg)"
        }
        else {
            item.parentElement.nextElementSibling.classList.add('hide')
            item.parentElement.nextElementSibling.classList.remove('show')
            let arrow = item.childNodes[1].childNodes[1];
            arrow.style = "transform: rotate(0deg)"
        }
    }


    )
})


