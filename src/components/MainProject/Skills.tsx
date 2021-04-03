import React from 'react';
import { theme } from '../../core/theme';

interface Props {
    SkillsItems: string[]
}
const Skills: React.FC<Props> = (props: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row"}}>
            {
                props.SkillsItems.map(skill => (
                    <div
                        key={skill}
                        style={{
                            padding: 5,
                            border: "1px solid #ff7b00",
                            margin: 10,
                            color: theme.colors?.mainText,
                        }}
                    >
                        {skill}
                    </div>
                ))
            }
        </div>
    )
}

export default Skills