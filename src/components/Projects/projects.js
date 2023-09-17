import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCardJS } from "../ProjectCard/projectCardJS";
import { ProjectCardReact } from "../ProjectCard/projectCardReact";
import colorSharp2 from "../../assets/img/color-sharp2.png"
import projImg1 from "../../assets/img/project-img1.png"
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
import capa3 from '../../assets/img-projects/3/capa.png'


export const Projects = () => {
    const projectsJS = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: capa3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: capa3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
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
            link: "https://ola-mundo-two.vercel.app/posts/18"
        },
        {
            title: "Hello world!",
            description: "My first portfolio made in React.",
            imgUrl: helloWorld,
            link: "https://organo-lilac-theta.vercel.app/"
        },
        {
            title: "Login Form",
            description: "Junior React Developer Job Test",
            imgUrl: loginForm,
            link: "https://desafio-jr-react-5k8j.vercel.app/"
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
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
                                <Tab.Pane eventKey="third">HTML & CSS</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}