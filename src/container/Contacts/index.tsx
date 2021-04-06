import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Text, Box } from "./styled";
import data from "../../helper/contacts.json";
interface Props {

}
const Contacts: React.FC<Props> = () => {
    return (
        <Box>
            <Container fluid>
                <Row>
                    <Col lg={"4"} className="mx-5">
                        <Text>
                            {
                                data.intro
                            }
                        </Text>
                    </Col>
                    <Col lg={"8"}>
                    
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </Box>
    )
}

export default Contacts