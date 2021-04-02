import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Text } from "../../components/Home/styled";
import { theme } from '../../core/theme';
import { Box } from "./styled";
interface Props {

}
const About: React.FC<Props> = () => {
    return (
        <Box>
            <Container fluid>
                <Row>
                    <Col>
                        <Text
                            fontSize={theme.fonts?.title.fontSize}
                            fontFamilly={theme.fonts?.title.fontFamilly}
                            color={theme.colors?.activeBtn}
                        >
                            Test
                        </Text>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                <div style={{}}></div>
            </Container>
        </Box>
    )
}

export default About;