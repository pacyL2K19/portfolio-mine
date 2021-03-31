import React from 'react';
import { Text } from '../../components/Home/styled';
import { theme } from '../../core/theme';
import projects from '../../helper/projects.json';
import { Box, ProjectTitleSection, LineSeparator } from "./styled";
import MainProject from "../../components/MainProject";
import Project from "../../components/Project";
import { Row, Col, Container } from "react-bootstrap";

interface Props {

}

const Projects: React.FC<Props> = () => {
    return (
        <>
            <Box>
                <ProjectTitleSection>
                    <Text color="#ooo" fontSize={theme.fonts?.title.fontSize} fontFamilly={theme.fonts?.title.fontFamilly}>
                        {projects.title}
                    </Text>
                    <LineSeparator />
                </ProjectTitleSection>
                <MainProject />
                <Container style={{marginTop: 40}}>
                    <Row>
                        {
                            projects.projects.map(pro => (
                                <Col lg={"4"}>
                                    <Project project={pro} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </Box>  
        </>
    )
}

export default Projects