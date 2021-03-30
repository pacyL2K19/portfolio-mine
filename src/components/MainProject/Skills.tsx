import React from 'react';

interface Props {
    SkillsItems: string[]
}
const Skills: React.FC<Props> = (props: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row"}}>
            {
                props.SkillsItems.map(skill => (
                    <div
                        style={{
                            padding: 10,
                            border: "1px solid black",
                            borderRadius: 5,
                            margin: 10
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