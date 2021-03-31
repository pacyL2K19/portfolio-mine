import React from 'react';

interface Props {
    project: Project
}
const Project: React.FC<Props> = (props: Props) => {
    return (
        <div style={{padding: "20px 10px"}}>
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
                <div
                    style={{
                        position: 'absolute',
                        top: 15,
                        bottom: 15,
                        left: 20,
                        right: 20,
                        backgroundColor: "red",
                        zIndex: 100,
                        opacity: 0.5
                    }}
                >

                </div>
            </div>
        </div>
    )
}

export default Project