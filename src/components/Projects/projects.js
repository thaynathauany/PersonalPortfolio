import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCardJS } from "../ProjectCard/projectCardJS";
import { ProjectCardReact } from "../ProjectCard/projectCardReact";
import { ProjectsHTMLeCSS } from "../ProjectCard/projectCardHTMLeCSS";
import colorSharp2 from "../../assets/img/color-sharp2.png"
// REACT
import organo from '../../assets/img-projects/1/capa.png'
import space from '../../assets/img-projects/6/capa.png'
import organic from '../../assets/img-projects/7/capa.png'
import organo2 from '../../assets/img-projects/14/capa.png'
import cineTag from '../../assets/img-projects/15/capa.png'
import ttFlix from '../../assets/img-projects/16/capa.png'
import imc from '../../assets/img-projects/17/capa.png'
import jogoDaMemoria from '../../assets/img-projects/18/capa.png'
import helloWorld from '../../assets/img-projects/19/capa.png'
import loginForm from '../../assets/img-projects/20/capa.png'
import styledComponents from '../../assets/img-projects/8/capa.png'
// JS
import patientForm from '../../assets/img-projects/2/capa.png'
import midi from '../../assets/img-projects/3/capa.png'
import robotron from '../../assets/img-projects/4/capa.png'
import backpack from '../../assets/img-projects/5/capa.png'
import secretNumber from '../../assets/img-projects/9/capa.png'
import registrationForm from '../../assets/img-projects/10/capa.png'
import aluraBooks from '../../assets/img-projects/11/capa.png'
import aluraPlay from '../../assets/img-projects/12/capa.png'
import ttBank from '../../assets/img-projects/13/capa.png'
import hypotenuse from '../../assets/img-projects/21/capa.png'
//HTML E CSS
import starbucks from '../../assets/img-projects/22/capa.png'
import ajax from '../../assets/img-projects/23/capa.png'

export const Projects = () => {
    const projectsJS = [
        {
            title: "Patient Form",
            description: "Develop a Patient Form.",
            imgUrl: patientForm,
            link: "https://formulario-pacientes.vercel.app/"
        },
        {
            title: "Alura Midi",
            description: "It aims to make the page more dynamic according to user interaction.",
            imgUrl: midi,
            link: "https://alura-midi-three.vercel.app/"
        },
        {
            title: "Robotron 2000",
            description: "Interacting with the page by manipulating the DOM.",
            imgUrl: robotron,
            link: "https://robotron-2000-b8zo.vercel.app/"
        },
        {
            title: "Travel backpack",
            description: "Armazenar dados no navegador",
            imgUrl: backpack,
            link: "https://mochila-de-viagem-thayna.vercel.app/"
        },
        {
            title: "Secret Number Game",
            description: "Developing a game from scratch using voice recognition to guess a secret number.",
            imgUrl: secretNumber,
            link: "https://jogo-numero-secreto-eight-smoky.vercel.app/"
        },
        {
            title: "Registration Form",
            description: "Learning to apply asynchronicity through a patient registration form.",
            imgUrl: registrationForm,
            link: "https://formulario-de-cadastro-lac.vercel.app/"
        },
        {
            title: "Alura Books",
            description: "Learning how to use the main array methods in JavaScript.",
            imgUrl: aluraBooks,
            link: "https://alura-books-murex-three.vercel.app/"
        },
        {
            title: "Alura Play",
            description: "Learning how to create requests.",
            imgUrl: aluraPlay,
            link: "https://alura-play-sandy.vercel.app/index.html"
        },
        {
            title: "TtBank",
            description: "Validating data through a bank account form.",
            imgUrl: ttBank,
            link: "https://tt-bank.vercel.app/"
        },
        {
            title: "Calculate the Hypotenuse",
            description: '',
            imgUrl: hypotenuse,
            link: "https://calculate-a-hypotenuse.vercel.app/"
        },
    ];
    const projectsReact = [
        {
            title: "Organo",
            description: "The website aims to organize teams, where respective roles can be assigned to each registered user.",
            imgUrl: organo,
            link: "https://organo-lilac-theta.vercel.app/"
        },
        {
            title: "Alura Space",
            description: "To develop a gallery of images.",
            imgUrl: space,
            link: "https://alura-space-rho.vercel.app/"
        },
        {
            title: "Organic Max",
            description: "Learning how to create and manage global states with ContextAPI.",
            imgUrl: organic,
            link: "https://organic-max.vercel.app/"
        },
        {
            title: "Organo 2",
            description: "The website aims to organize teams, where respective roles can be assigned to each registered user and create a new team.",
            imgUrl: organo2,
            link: "https://organo2-eta.vercel.app/"
        },
        {
            title: "Cine Tag",
            description: "Building components and pages.",
            imgUrl: cineTag,
            link: "https://cine-tag-azure.vercel.app/"
        },
        {
            title: "Tt Flix",
            description: "Building a page using an API.",
            imgUrl: ttFlix,
            link: "https://tt-flix.vercel.app/"
        },
        {
            title: "IMC",
            description: "Building a page to enhance knowledge of useState in React.",
            imgUrl: imc,
            link: "https://projeto-imc-zeta.vercel.app/"
        },
        {
            title: "Memory Game",
            description: "Building a memory game.",
            imgUrl: jogoDaMemoria,
            link: "https://jogo-da-memoria-xi.vercel.app/"
        },
        {
            title: "Hello world!",
            description: "My first portfolio made in React.",
            imgUrl: helloWorld,
            link: "https://ola-mundo-two.vercel.app/"
        },
        {
            title: "Login Form",
            description: "Junior React Developer Job Test",
            imgUrl: loginForm,
            link: "https://desafio-jr-react-5k8j.vercel.app/"
        },
        {
            title: "Styled Components",
            description: "Learn how to write CSS code within JavaScript.",
            imgUrl: styledComponents,
            link: "https://styled-components-self.vercel.app/"
        },
    ];
    const projectsHTMLeCSS = [
        {
            title: "Starbucks Project",
            description: "",
            imgUrl: starbucks,
            link: "https://starbucks-project-nine.vercel.app/"
        },
        {
            title: "Ajax Project",
            description: "",
            imgUrl: ajax,
            link: "https://p-rojeto-ajax.vercel.app/"
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here you can find my main projects. The code for all of them is on my <a className="project-link2" href="https://github.com/thaynathauany" rel="noreferrer" target="_blank"><em>GitHub</em></a></p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">JavaScript</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">HTML & CSS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsJS.map((project, index) => {
                                                return (
                                                    <ProjectCardJS
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsReact.map((project, index) => {
                                                return (
                                                    <ProjectCardReact
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projectsHTMLeCSS.map((project, index) => {
                                                return (
                                                    <ProjectsHTMLeCSS
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}