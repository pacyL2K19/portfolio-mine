import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Text } from "../../components/Home/styled";
import { theme } from '../../core/theme';
interface Props {

}
const About: React.FC<Props> = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Text
                            fontSize={theme.fonts?.title.fontSize}
                            fontFamilly={theme.fonts?.title.fontFamilly}
                            color={theme.colors?.mainText}
                        >
                            Test
                        </Text>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                <div style={{}}></div>
            </Container>
        </>
    )
}

export default About;