import React from 'react';

interface Props {
    project: Project
}
const Project: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div
                style={{
                    backgroundImage : 'url('+props.project.imgUrl+')',
                    backgroundRepeat:"no-repeat",
                    backgroundSize: "cover",
                    height: 500,
                    width: "100%",
                    backgroundPosition: "center"
                }}
            >

            </div>
        </>
    )
}

export default Project