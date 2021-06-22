import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Text, Box } from "./styled";
import emailjs from "emailjs-com";
import secrets from "../../secrets";
import data from "../../helper/contacts.json";
import social from "../../helper/social.json";
import TextField from "@material-ui/core/TextField";
import Button from "../../components/Button";

const Contacts: React.FC = () => {
  const [firstName, setFIrstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState(data.sample);
  const [email, setEmail] = useState("");
  const handleSubmit = (e: any) => {
    console.log("Sending");
    emailjs
      .sendForm(
        secrets.SERVICE_ID,
        secrets.TEMPLATE_ID,
        e.target,
        secrets.USER_ID
      )
      .then(() => {
        console.log("sent successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Box id="contacts">
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
          <Col lg={"4"} className="px-3 px-md-5">
            <Text>{data.intro}</Text>
          </Col>
          <form>
            <Col lg={"8"} className="px-3 px-md-5">
              <Row>
                <Col lg={"6"}>
                  <TextField
                    fullWidth
                    style={{ margin: "15px 0" }}
                    id="first-name"
                    name="firstName"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFIrstName(e.target.value)}
                  />
                </Col>
                <Col lg={"6"}>
                  <TextField
                    style={{ margin: "15px 0" }}
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
                style={{ margin: "15px 0" }}
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                style={{ margin: "15px 0" }}
                id="message"
                name="message"
                label="Message"
                multiline
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <a onClick={handleSubmit}>
                <Button title={data["button-title"]} />
              </a>
            </Col>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              Send
            </button>
          </form>
        </Row>
        <div
          style={{
            height: 0.5,
            margin: "150px 0 35px 0",
            backgroundColor: "#DFE1E6",
          }}
        ></div>
        <div className="d-flex align-items-center justify-content-center">
          {social.social.map((i) => (
            <h2 className="mx-3" key={i.class}>
              <a href={i.link} target="_blank" rel="noreferrer">
                <i
                  style={{ color: "#505F79", fontSize: 20 }}
                  className={i.class}
                ></i>
              </a>
            </h2>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-center">
          {social.social[0].link === "https://github.com/pacyL2K19" ? (
            <p></p>
          ) : (
            <p>
              Forked from{" "}
              <a href="https://github.com/pacyL2K19/portfolio-mine">
                @pacyL2K19{" "}
              </a>{" "}
              portfolio template
            </p>
          )}
        </div>
      </Container>
    </Box>
  );
};

export default Contacts;
