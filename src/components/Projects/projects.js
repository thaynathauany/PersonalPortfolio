import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../../assets/img/project-img1.png"
import { ProjectCardJS } from "../ProjectCard/projectCardJS";
import { ProjectCardReact } from "../ProjectCard/projectCardReact";
import colorSharp2 from "../../assets/img/color-sharp2.png"
import capa1 from '../../assets/img-projects/1/capa.png'
import capa2 from '../../assets/img-projects/2/capa.png'
import capa3 from '../../assets/img-projects/3/capa.png'
import capa4 from '../../assets/img-projects/4/capa.png'

export const Projects = () => {
    const projectsJS = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: capa1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: capa2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
    ];
    const projectsReact = [
        {
            title: "Teste React",
            description: "Design & Development",
            imgUrl: capa2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: capa2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
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
                                    <Nav.Link eventKey="third">Programming Logic</Nav.Link>
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
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}