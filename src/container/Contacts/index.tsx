import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Text, Box } from "./styled";
import data from "../../helper/contacts.json";
import homeData from "../../helper/header.json";
import TextField from "@material-ui/core/TextField";
import Button from "../../components/Button";


const Contacts: React.FC = () => {
    const [firstName, setFIrstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState(data.sample);
    const [email, setEmail] = useState("");
    return (
        <Box>
            <Container fluid>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col lg={"4"} className="px-5">
                        <Text>
                            {
                                data.intro
                            }
                        </Text>
                    </Col>
                    <Col lg={"8"} className="px-5">
                        <Row>
                            <Col lg={"6"}>
                                <TextField
                                    fullWidth
                                    style={{margin: "15px 0"}}
                                    id="first-name"
                                    name="firstName"
                                    label="First Name"
                                    value={firstName}
                                    onChange={(e) => setFIrstName(e.target.value)}
                                />
                            </Col>
                            <Col lg={"6"}>
                                <TextField
                                    style={{margin: "15px 0"}}
                                    fullWidth
                                    id="last-name"
                                    name="lasttName"
                                    label="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <TextField
                            style={{margin: "15px 0"}}
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            style={{margin: "15px 0"}}
                            id="message"
                            name="message"
                            label="Message"
                            multiline
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button title={data["button-title"]} />
                    </Col>
                </Row>
                <div style={{height: 0.5, margin: "150px 0 35px 0", backgroundColor: "#DFE1E6"}}></div>
                <div className="d-flex align-items-center justify-content-center">
                    {
                        homeData.icons.map(i => <h2 style={{color: "#505F79", fontSize: 20}} className="mx-3" key={i.class}><i className={i.class}></i></h2>)
                    }
                </div>
            </Container>
        </Box>
    );
};

export default Contacts;