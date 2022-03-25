import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Icon, listIcons } from '@iconify/react';
import './styles.css';


const cvHeaderLink = (
    <a href="#PDF" className="cvHeaderLink">
        <h3>TYLER RIEHL'S CV</h3>
    </a>
);

// const navIcon = (
//     <a href="#nav" className="navIcon">
//         <span class="material-icons-outlined">menu</span>
//     </a>
// );

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
let projectList = [
    {
        id: 0,
        header: "SOS CAT Tucson",
        img: "/cards/sosCat_ss.png",
        src: "https://happy-fermi-406b5b.netlify.app/",
        alt: "SOS Cat Website Screenshot",
        learnMore: [
            {
                div: 'overview',
                cards: [
                    {
                        header: "Overview",
                        text: "This project has a lot of overview information",
                        image: "",
                        icon: "",
                    }
                ]



            },
            {
                spacerName: '1. Conceptualize',
                div: 'concept',
                cards: [
                    {
                        header: "Initial Design",
                        text: "",
                        image: "/cards/old_sos_ss.png",
                        icon: "",
                    },
                    {
                        header: "Research and Review",
                        text: "We researched and reviewed everything",
                        image: "",
                        icon: "",
                    },
                ]
            },
            {
                spacerName: '2. Frontend Code',
                div: 'frontend',
                cards: [
                    {
                        header: "HTML",
                        text: "code blah blah",
                        image: "",
                        icon: "",
                    },
                    {
                        header: "CSS",
                        text: "code blah blah",
                        image: "",
                        icon: "",
                    },
                    {
                        header: "JS",
                        text: "code blah blah",
                        image: "",
                        icon: "",
                    },
                ]
            },


        ],
    },
    {
        id: 1,
        header: "Motivation App",
        img: "/cards/motivation_ss.png",
        src: "https://relaxed-hermann-78dd8e.netlify.app/",
        alt: "Motivation Bot Screenshot",
        learnMore: [
            {
                div: 'overview',
                cards: [
                    {
                        header: "Overview",
                        text: "This project has a lot of overview information",
                        image: "",
                        icon: "",
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        header: "iOS Watch App",
        img: "/cards/watch_cloud_ss.png",
        src: "https://riehltj.github.io/SunscreenApp/",
        alt: "Sunscreen App - Screenshot",
        learnMore: [
            {
                div: 'overview',
                cards: [
                    {
                        header: "Overview",
                        text: "This project has a lot of overview information",
                        image: "",
                        icon: "",
                    }
                ]

            },
        ]
    },
    {
        id: 3,
        header: "Raytheon Core Survey",
        img: "/cards/raytheon image.png",
        src: "https://riehltj.github.io/gate5Collab/main.html",
        alt: "Raytheon Core - Screenshot",
        learnMore: [
            {
                div: 'overview',
                cards: [
                    {
                        header: "Overview",
                        text: "This project has a lot of overview information",
                        image: "",
                        icon: "",
                    }
                ]
            },
        ]
    },
    {
        id: 4,
        header: "SOS CAT Tucson",
        img: "/cards/todo img.png",
        src: "https://wizardly-edison-54231c.netlify.app/",
        alt: "To do app - Screenshot",
        learnMore: [
            {
                div: 'overview',
                cards: [
                    {
                        header: "Overview",
                        text: "This project has a lot of overview information",
                        image: "",
                        icon: "",
                    }
                ]
            },
        ]
    },
]

const cardSpacer = (title) => {

    return (
        <div div className='card-spacer' >
            <div className='shapes'>
                <div className='rect'></div>
                <div className='circle'></div>
                <div className='rect'></div>
            </div>
            <div className='card-spacer-title'>{title}</div>
        </div >
    )

}
const Cards = () => {
    const [showText, setShowText] = useState(false);
    const onClick = () => setShowText(true);
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
                            <a href={"#" + project.id} className="learn-btn" onClick={onClick}> <h1> Learn More <Icon id="dropdown-target" rotate="0deg" icon="gridicons:chevron-down" /></h1></a>
                        </div>




                        <CSSTransition in={showText} timeout={200} classNames="my-node">

                            {showText ? (
                                <div className="dropdown-list hide">
                                    {project.learnMore.map((dropdownCards) => (
                                        <div className={dropdownCards.div + " flex"}>
                                            {dropdownCards.cards.map((objCards) => (
                                                <div className="dropdown-card">
                                                    <h1>{objCards.header}</h1>
                                                    <p>{objCards.text}</p>
                                                    <img width='50' src={process.env.PUBLIC_URL + objCards.image}></img>
                                                    <Icon icon={objCards.icon}></Icon>

                                                </div>
                                            ))}


                                        </div>

                                    ))}
                                </div>) : null}
                        </CSSTransition>

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

const Frontend = () => {
    return (
        <div className='stack-container'>
            <h1>FRONTEND</h1>

            {frontEndStack.map((tech) => (
                <div className='box'>
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
        <div className='stack-container'>
            <h1>DESIGN / CMS</h1>

            {designCMS.map((tech) => (
                <div className='box'>
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
        <div className='stack-container'>
            <h1>BACKEND</h1>

            {backend.map((tech) => (
                <div className='box'>
                    <Icon class="stack-icon" icon={tech.icon}></Icon>
                    <h3>{tech.text}</h3>
                </div>
            ))}
        </div>
    )
}

const MyStack = () => {
    return (
        <section id='stack'>
            <h1>My Stack</h1>
            <div>{<Frontend />} {<Design />} {<Backend />}</div>
        </section>
    )
}

const Connect = () => {
    // add form information followed by icons
    return (
        <div className='contact-info-container'>
            <h1>CONNECT WITH TYLER</h1>
            <form>
                <div className='contact-info-top'>
                    <input id="name" placeholder="name" type='text'></input>
                    <input id="email" placeholder="email" type='email'></input>
                </div>
                <input id="subject" placeholder='subject' type='text'></input>
                <textarea id="message" placeholder='message'></textarea>
            </form>
        </div>
    )

}

const ContactIcons = [
    {
        icon: 'carbon:email',
    },
    {
        icon: 'bi:phone',
    },
    {
        icon: 'feather:github',
    },
    {
        icon: 'eva:linkedin-fill',
    },
    {
        icon: 'carbon:document-download',
    }

]

const Contact = () => {
    return (
        <div className='contact-buttons'>
            <div className='hex'>
                {ContactIcons.map((index) => (
                    <Icon icon={index.icon}></Icon>))}

            </div>
        </div>
    )
}


const SideBar = () => {
    return (
        <div className='side-bar'>
            <div className='side-icon'>
                {ContactIcons.map((index) => (
                    <Icon icon={index.icon}></Icon>))}

            </div>
        </div>
    )
}






ReactDOM.render([header, hero, about, <Cards />, <MyStack />, <Connect />, <Contact />, <SideBar />], document.getElementById("root"));


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let dropped = false;




//listening to "learn more"
document.querySelectorAll('.learn-btn').forEach(item => {
    item.addEventListener('click', event => {



        if (dropped === true) {
            item.parentElement.nextElementSibling.classList.add('hide')
            item.parentElement.nextElementSibling.classList.remove('show')
            let arrow = item.childNodes[1].childNodes[1];
            arrow.style = "transform: rotate(0deg)"
            dropped = false

        }
        else {
            item.parentElement.nextElementSibling.classList.remove('hide')
            item.parentElement.nextElementSibling.classList.add('show')
            let arrow = item.childNodes[1].childNodes[1];
            arrow.style = "transform: rotate(180deg)"
            dropped = true
        }
    }


    )
})