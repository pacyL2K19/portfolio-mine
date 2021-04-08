import React from "react";
import { Text } from "../../components/Home/styled";
import { theme } from "../../core/theme";
import projects from "../../helper/projects.json";
import { Box, ProjectTitleSection, LineSeparator } from "./styled";
import MainProject from "../../components/MainProject";
import Project from "../../components/Project";
import { Row, Col, Container } from "react-bootstrap";
import animations from "../../helper/animations.json";

const Projects: React.FC = () => {
    return (
        <>
            <Box id="projects">
                <ProjectTitleSection>
                    <Text color={theme.colors?.main} fontSize={theme.fonts?.title.fontSize} fontFamilly={theme.fonts?.title.fontFamilly}>
                        {projects.title}
                    </Text>
                    <LineSeparator />
                </ProjectTitleSection>
                <MainProject />
                <Container style={{marginTop: 40}}>
                    <Row>
                        {
                            projects.projects.slice(1, projects.projects.length).map(pro => (
                                <Col
                                    key={pro.id}
                                    data-aos={animations.projects.projects["project-box"]}
                                    lg={"4"}
                                >
                                    <Project project={pro} />
                                    <br />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </Box>  
        </>
    );
};

export default Projects;