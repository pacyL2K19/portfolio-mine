import React from 'react';
import { ButtonBox } from "./styled"

interface Props {
    title: string
}
const Button: React.FC<Props> = (props: Props) => {
    return (
        <>
            <ButtonBox>
                <p style={{textAlign: "center", fontSize: 23}}>{props.title}</p>
            </ButtonBox>
        </>
    )
}

export default Button