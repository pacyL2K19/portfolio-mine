import React from 'react';
import projects from '../../helper/projects.json';
import { Row, Container, Col, Image } from "react-bootstrap";
import Skills from "./Skills";
import Button from "../../components/Button";
import { theme } from '../../core/theme';
interface Props {

}

const MainProject: React.FC<Props> = () => {
    return (
        <>
            <Container fluid>
                <Row style={{justifyContent: 'space-around'}}>
                    <Col
                        lg={7}
                        style=
                            {{
                                height: 500,
                                backgroundColor: theme.colors?.activeBtn,
                                borderRadius: 5,
                                display: "flex",
                                alignItems: 'center',
                                justifyContent: "center",
                                padding: "auto 200px"
                            }}
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <Image
                            src={projects.projects[0].imgUrl}
                            fluid
                        />
                    </Col>
                    <Col
                        data-aos="fade-left"
                        data-aos-duration="700"
                        data-aos-anchor-placement="center-bottom"
                        lg={4}
                    >
                        <Row>
                            <Col lg={'12'}>
                                <p className="h1" style={{color: "#fff"}}>{ projects.projects[0].title }</p>
                                <div style={{height: 1, margin: "50px 0", backgroundColor: theme.colors?.activeBtn, width: "100%"}}></div>
                            </Col>
                            <Col lg={'12'}>
                                <p style={{fontSize: 20, color: theme.colors?.mainText, marginBottom: 40}}>{ projects.projects[0].description }</p>
                            </Col>
                            <Col lg={'12'}>
                                <Skills SkillsItems={projects.projects[0].techs} />
                            </Col>
                            <Col lg={'5'}>
                                <Button title = "See Project" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainProject;