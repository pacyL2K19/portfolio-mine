import React from "react";
import { theme } from "../../core/theme";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectBox, ProjectLabel, ProjectDescription } from "./styled";
import animations from "../../helper/animations.json";

interface Props {
  project: Project;
}
const Project: React.FC<Props> = (props: Props) => {
  return (
    <div
      style={{
        padding: "20px 10px",
        boxShadow: "0 0 5px gray",
        borderRadius: 10,
      }}
    >
      <a
        href={props.project.github_link}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <ProjectBox
          key={props.project.id}
          style={{
            backgroundImage: "url(" + props.project.imgUrl + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 500,
            width: "100%",
            backgroundPosition: "center",
          }}
        >
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: 30,
              bottom: 30,
              left: 20,
              right: 20,
              backgroundImage:
                "linear-gradient(to top, " +
                theme.colors?.background +
                " , rgba(250, 250, 250, 0.5))",
              zIndex: 100,
            }}
          >
            <ProjectLabel>{props.project.title}</ProjectLabel>
            <ProjectDescription className="mx-3">
              {props.project.description}
            </ProjectDescription>
            <Container style={{ position: "absolute", bottom: 20 }}>
              <Row>
                {props.project.techs?.slice(0, 3).map((skill) => (
                  <Col
                    className="my-1"
                    key={skill}
                    lg={"4"}
                    data-aos={animations.projects.projects["skills-box"]}
                    data-aos-duration={animations.projects.projects.duration}
                    data-aos-anchor-placement="center-bottom"
                  >
                    <div
                      style={{
                        backgroundColor: "#746969",
                        borderColor: theme.colors?.clickBtn,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderRadius: 15,
                        padding: 3,
                      }}
                    >
                      <p
                        style={{
                          color: "white",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        {skill}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
          <div className="button" style={{ padding: 10, display: "none" }}>
            <i className="fas fa-eye"></i> See Project
          </div>
        </ProjectBox>
      </a>
    </div>
  );
};

export default Project;
