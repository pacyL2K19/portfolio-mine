import React from 'react';

interface Props {
    imageUrl: string
}
const Project: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div
                style={{
                    background: "url("+require(props.imageUrl)+")",
                    backgroundRepeat:"no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                    width: "100%",
                    backgroundPosition: "center"
                }}
            >

            </div>
        </>
    )
}

export default Project