import React from 'react';
import { theme } from '../../core/theme';
import { Container, Row, Col } from "react-bootstrap";
import { ProjectBox } from "./styled";

interface Props {
    project: Project
}
const Project: React.FC<Props> = (props: Props) => {
    return (
        <div style={{padding: "20px 10px"}}>
            <ProjectBox
                key={props.project.id}
                style={{
                    backgroundImage : 'url('+props.project.imgUrl+')',
                    backgroundRepeat:"no-repeat",
                    backgroundSize: "cover",
                    height: 500,
                    width: "100%",
                    backgroundPosition: "center"
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 15,
                        bottom: 15,
                        left: 20,
                        right: 20,
                        backgroundImage: 'linear-gradient(to top, '+theme.colors?.background+' , rgba(250, 250, 250, 0.5))',
                        zIndex: 100,
                    }}
                >
                    <h3
                        style={{
                            backgroundColor: theme.colors?.activeBtn,
                            color: "white",
                            textAlign: "center",
                            margin: "40px -20px 0 40px",
                            padding: 10,
                            borderRadius: "0 30px 30px 0",                            
                        }}>{props.project.title}
                    </h3>
                    <p style={{color: "white", fontSize: 18, marginTop: 120, padding: 30}}>{props.project.description}</p>
                    <Container style={{ position: "absolute", bottom: 20 }}>
                        <Row>
                            {
                                props.project.techs?.slice(0, 3).map(skill => (
                                    <Col
                                        key={skill}
                                        lg={"4"}
                                        data-aos="fade-down"
                                        data-aos-duration="700"
                                        data-aos-anchor-placement="center-bottom"
                                    >
                                        <div
                                            style={{
                                                backgroundColor: "#746969",
                                                borderColor: theme.colors?.clickBtn,
                                                borderWidth: 1,
                                                borderStyle: 'solid',
                                                padding: 3
                                            }}
                                        >
                                            <p style={{color: "white", margin: 0, textAlign: "center"}}>{skill}</p>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </div>
                <div className="button" style={{ padding: 10, display: "none" }}>
                    <i className="fas fa-eye"></i> See Project
                </div>
            </ProjectBox>
        </div>
    )
}

export default Project