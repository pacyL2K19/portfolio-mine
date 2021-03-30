import React from 'react';
import { Text } from '../../components/Home/styled';
import { theme } from '../../core/theme';
import projects from '../../helper/projects.json';
import { Box, ProjectTitleSection, LineSeparator } from "./styled";
import MainProject from "../../components/MainProject";

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
            </Box>  
        </>
    )
}

export default Projects