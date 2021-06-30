import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Text } from "../../components/Home/styled";
import { theme } from "../../core/theme";
import { Box } from "./styled";
import about from "../../helper/about.json";
import Button from "../../components/Button";
import profile from "../../assets/down.png";
import { Profile } from "../../components/Home/styled";
import animations from "../../helper/animations.json";

const About: React.FC = () => {
  return (
    <Box id="about">
      <Container fluid>
        <Row
          style={{ padding: "0px 3%" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Col>
            <Text
              fontSize={theme.fonts?.title.fontSize}
              fontFamilly={theme.fonts?.title.fontFamilly}
              color={theme.colors?.mainText}
              style={{ fontWeight: "bold" }}
            >
              About Me
            </Text>
            <div
              style={{
                height: 0.5,
                margin: "35px 0",
                backgroundColor: "#fff",
                width: "50%",
              }}
            ></div>
            <Text
              className="mt-5 mb-0"
              data-aos={animations.about.description}
              data-aos-duration={animations.about["description-duration"]}
              fontSize={theme.fonts?.subtitle.fontSize}
              fontFamilly={theme.fonts?.title.fontFamilly}
              color={theme.colors?.mainText}
            >
              {about.description}
            </Text>
            <Row>
              <Col lg={"6"}>
                <a href={about.resumeUrl} target="_blank" rel="noreferrer">
                  <Button title="My Resume" />
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="d-sm-flex d-none align-items-center justify-content-center">
            <Profile
              data-aos={animations.about.image}
              data-aos-duration={animations.about["image-duration"]}
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={profile}
                alt=" Pacifique Linjanja "
                style={{
                  height: 500,
                }}
              />
            </Profile>
          </Col>
        </Row>
        <div
          style={{
            height: 0.5,
            margin: "100px 0",
            backgroundColor: "#fff",
            width: "100%",
          }}
        ></div>
        <Row style={{ padding: "0px 3%" }}>
          <Col lg={"4"}>
            <p
              style={{
                color: theme.colors?.mainText,
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              <i
                className={about.skills.languages.icon}
                style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
              ></i>{" "}
              Languages
            </p>
            {about.skills.languages.techs.map((language) => (
              <p
                key={language}
                data-aos={animations.about.languages.name}
                data-aos-duration={animations.about.languages.duration}
                style={{
                  color: theme.colors?.mainText,
                }}
              >
                <i
                  className="fas fa-angle-right"
                  style={{
                    color: theme.colors?.activeBtn,
                    marginRight: 10,
                  }}
                ></i>
                {language}
              </p>
            ))}
          </Col>
          <Col lg={"4"}>
            <p
              style={{
                color: theme.colors?.mainText,
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              <i
                className={about.skills.frameWorks.icon}
                style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
              ></i>{" "}
              Frameworks
            </p>
            <div data-aos={animations.about.frameworks.name}>
              {about.skills.frameWorks.techs.map((framework) => (
                <p key={framework} style={{ color: theme.colors?.mainText }}>
                  <i
                    className="fas fa-angle-right"
                    style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
                  ></i>{" "}
                  {framework}
                </p>
              ))}
            </div>
          </Col>
          <Col lg={"4"}>
            <p
              style={{
                color: theme.colors?.mainText,
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              <i
                className={about.skills.skills.icon}
                style={{
                  color: theme.colors?.activeBtn,
                  marginRight: 10,
                }}
              ></i>
              Tools
            </p>
            {about.skills.skills.techs.map((skill) => (
              <p
                key={skill}
                data-aos={animations.about.tools.name}
                data-aos-duration={animations.about.tools.duration}
                style={{ color: theme.colors?.mainText }}
              >
                <i
                  className="fas fa-angle-right"
                  style={{ color: theme.colors?.activeBtn, marginRight: 10 }}
                ></i>{" "}
                {skill}
              </p>
            ))}
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default About;
