import styled from "styled-components";

export const Box = styled.section`
    padding: 170px 3%;
`;

export const Icon = styled.i`
    color: white;
    margin: 15px auto;
`;

export const Profile = styled.div`
    /* height: 250px;
    width: 250px;
    border-radius: 125px;
    box-shadow: 0 0 30px white; */
`;

export const Text = styled.h2<Texts>`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamilly};
    margin-bottom: 20px;
`;

export const Img = styled.div`
    background-image: url()
`;