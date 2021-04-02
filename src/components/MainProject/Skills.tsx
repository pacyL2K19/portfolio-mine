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
                            padding: 10,
                            border: "1px solid #ff7b00",
                            borderRadius: 5,
                            margin: 10,
                            color: theme.colors?.mainText,
                            // backgroundColor: "#fff"
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