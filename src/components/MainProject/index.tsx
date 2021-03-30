import React from 'react';
import projects from '../../helper/projects.json';
import { Row, Container, Col, Image } from "react-bootstrap";
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
                    <Col lg={4}>
                        <Row>
                            <Col lg={'12'}>
                                <p className="h1">{ projects.projects[0].title }</p>
                                <div style={{height: 1, margin: "50px 0", backgroundColor: "black", width: "100%"}}></div>
                            </Col>
                            <Col lg={'12'}>
                                <p style={{fontSize: 22}}>{ projects.projects[0].description }</p>
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