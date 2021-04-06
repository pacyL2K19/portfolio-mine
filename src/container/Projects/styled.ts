import styled from "styled-components";
import { theme } from "../../core/theme";

export const Box = styled.section`
    padding: 100px 5%;
    background-color: white
`;

export const ProjectTitleSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px
`;

export const LineSeparator = styled.div`
    height: 1px;
    background-color: ${theme.colors?.main};
    width: 80%;
    align-self: center;
    margin-left: 10px
`;
