import React from 'react';

interface Props {
    SkillsItems: string[]
}
const Skills: React.FC<Props> = (props: Props) => {
    return (
        <>
            {
                props.SkillsItems.map(skill => (
                    <div
                        style={{
                            padding: 10,
                            border: "1px solid black",
                            borderRadius: 5
                        }}
                    >
                        {skill}
                    </div>
                ))
            }
        </>
    )
}

export default Skills