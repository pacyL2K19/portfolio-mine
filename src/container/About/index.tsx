import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Text } from "../../components/Home/styled";
import { theme } from '../../core/theme';
import { Box } from "./styled";
import about from "../../helper/about.json";
import Button from "../../components/Button";
interface Props {

}
const About: React.FC<Props> = () => {
    return (
        <Box>
            <Container fluid>
                <Row style={{padding: "0px 3%"}}>
                    <Col>
                        <Text
                            fontSize={theme.fonts?.title.fontSize}
                            fontFamilly={theme.fonts?.title.fontFamilly}
                            color={theme.colors?.activeBtn}
                        >
                            About Me
                        </Text>
                        <div style={{height: 0.5, margin: "35px 0", backgroundColor: "#fff", width: "50%"}}></div>
                        <Text
                            fontSize={theme.fonts?.secondary.fontSize}
                            fontFamilly={theme.fonts?.title.fontFamilly}
                            color={theme.colors?.mainText}
                        >
                            {
                                about.description
                            }
                        </Text>
                        <Row>
                            <Col lg = {"5"}>
                                <Button title = "My Resume" />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                <div style={{height: 0.5, margin: "100px 0", backgroundColor: "#fff", width: "100%"}}></div>
                <Row style={{padding: "0px 3%"}}>
                    <Col lg = {"4"}>
                        <p style={{color: theme.colors?.mainText, fontSize: 28, fontWeight: "bold"}}><i className="fas fa-terminal" style={{color: theme.colors?.activeBtn}}></i> Languages</p>
                        {
                            about.skills.languages.map((language) => (
                                <p style={{color: theme.colors?.mainText}}>{language}</p>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </Box>
    )
}

export default About;