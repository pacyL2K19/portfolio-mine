import React from 'react';
import projects from '../../helper/projects.json';
import { Row, Container, Col } from "react-bootstrap";
interface Props {

}

const MainProject: React.FC<Props> = () => {
    return (
        <>
            <Container fluid>
                <Row >
                    <Col style=
                        {{
                            height: 400,
                            backgroundColor: "#c78c20",
                            borderRadius: 10
                        }}
                    >

                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainProject;