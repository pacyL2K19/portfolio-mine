import React from 'react';
import { Text } from '../../components/Home/styled';
import { theme } from '../../core/theme';
import projects from '../../helper/projects.json';
import { Box, ProjectTitleSection, LineSeparator } from "./styled";

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
            </Box>  
        </>
    )
}

export default Projects