import React from 'react';
import { Text } from '../../components/Home/styled';
import { theme } from '../../core/theme';
import projects from '../../helper/projects.json';

interface Props {

}

const Projects: React.FC<Props> = () => {
    return (
        <>
            <div>
                <Text color="#ooo" fontSize={theme.fonts?.title.fontSize} fontFamilly={theme.fonts?.title.fontFamilly}>
                    {projects.title}
                </Text>
            </div>  
        </>
    )
}

export default Projects