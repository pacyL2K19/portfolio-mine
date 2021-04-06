import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Text, Box } from "./styled";
import data from "../../helper/contacts.json";
import TextField from '@material-ui/core/TextField';

interface Props {

}
const Contacts: React.FC<Props> = () => {
    return (
        <Box>
            <Container fluid>
                <Row>
                    <Col lg={"4"} className="px-5">
                        <Text>
                            {
                                data.intro
                            }
                        </Text>
                    </Col>
                    <Col lg={"8"}>
                        <Row>
                            <Col lg={"6"}>
                                <TextField
                                    fullWidth
                                    style={{margin: "15px 0"}}
                                    id="first-name"
                                    name="firstName"
                                    label="First Name"
                                    // value={formik.values.email}
                                    // onChange={formik.handleChange}
                                    // error={formik.touched.email && Boolean(formik.errors.email)}
                                    // helperText={formik.touched.email && formik.errors.email}
                                />
                            </Col>
                            <Col lg={"6"}>
                                <TextField
                                    style={{margin: "15px 0"}}
                                    fullWidth
                                    id="last-name"
                                    name="lasttName"
                                    label="Last Name"
                                    // value={formik.values.email}
                                    // onChange={formik.handleChange}
                                    // error={formik.touched.email && Boolean(formik.errors.email)}
                                    // helperText={formik.touched.email && formik.errors.email}
                                />
                            </Col>
                        </Row>
                        <TextField
                            style={{margin: "15px 0"}}
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            // value={formik.values.email}
                            // onChange={formik.handleChange}
                            // error={formik.touched.email && Boolean(formik.errors.email)}
                            // helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            style={{margin: "15px 0"}}
                            id="message"
                            name="message"
                            label="Message"
                            multiline
                            // value={formik.values.email}
                            // onChange={formik.handleChange}
                            // error={formik.touched.email && Boolean(formik.errors.email)}
                            // helperText={formik.touched.email && formik.errors.email}
                        />
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </Box>
    )
}

export default Contacts