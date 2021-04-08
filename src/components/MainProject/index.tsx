import React from "react";
import projects from "../../helper/projects.json";
import { Row, Container, Col, Image } from "react-bootstrap";
import Skills from "./Skills";
import Button from "../../components/Button";
import { theme } from "../../core/theme";
import animations from "../../helper/animations.json";
import { ImageContainer } from "./styled";

const MainProject: React.FC = () => {
    return (
        <>
            <Container fluid>
                <Row style={{justifyContent: "space-around"}}>
                    <Col
                        lg={7}
                        data-aos={animations.projects["main-project"].image}
                        data-aos-duration={animations.projects["main-project"].duration}
                        data-aos-anchor-placement="center-bottom"
                    >
                        <ImageContainer>
                            <Image
                                src={projects.projects[0].imgUrl}
                                fluid
                            />
                        </ImageContainer>
                    </Col>
                    <Col
                        data-aos={animations.projects["main-project"]["description-bloc"]}
                        data-aos-duration={animations.projects["main-project"].duration}
                        data-aos-anchor-placement="center-bottom"
                        lg={4}
                    >
                        <Row>
                            <Col lg={"12"}>
                                <p className="h1 my-3" style={{color: theme.colors?.main}}>{ projects.projects[0].title }</p>
                                <div style={{height: 1, margin: "50px 0", backgroundColor: theme.colors?.activeBtn, width: "100%"}}></div>
                            </Col>
                            <Col lg={"12"}>
                                <p style={{fontSize: 20, color: theme.colors?.main, marginBottom: 40}}>{ projects.projects[0].description }</p>
                            </Col>
                            <Col lg={"12"}>
                                <Skills SkillsItems={projects.projects[0].techs} />
                            </Col>
                            <Col>
                                <a href={projects.projects[0].live_link} target="_blank" rel="noreferrer"><Button title = "Live version" icon="fas fa-eye" /></a>
                            </Col>
                            <Col>
                                <a href={projects.projects[0].github_link} target="_blank" rel="noreferrer"><Button title = "Source code" icon="fab fa-github" /></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MainProject;