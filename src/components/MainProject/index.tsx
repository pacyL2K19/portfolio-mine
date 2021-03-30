import React from 'react';
import projects from '../../helper/projects.json';
import { Row, Container, Col, Image } from "react-bootstrap";
interface Props {

}

const MainProject: React.FC<Props> = () => {
    return (
        <>
            <Container fluid>
                <Row >
                    <Col 
                        style=
                            {{
                                height: 450,
                                backgroundColor: "#c78c20",
                                borderRadius: 10,
                                display: "flex",
                                alignItems: 'center',
                                justifyContent: "center",
                                padding: "auto 200px"
                            }}
                    >
                        <Image
                            src={projects.projects[0].imgUrl}
                            fluid
                        />
                    </Col>
                    <Col>
                        <Row>
                            <Col lg={'12'}>
                                <p className="h2">{ projects.projects[0].title }</p>
                            </Col>
                            <Col lg={'12'}>
                                <p style={{fontSize: 18}}>{ projects.projects[0].description }</p>
                            </Col>
                            <Col lg={'12'}>
                                
                            </Col>
                            <Col lg={'12'}>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainProject;