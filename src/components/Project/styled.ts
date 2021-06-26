import styled from "styled-components";
import { theme } from "../../core/theme";

export const ProjectBox = styled.div`
    
    &:hover {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    &:hover .overlay {
        z-index: -1 !important;
        animation-duration: 3s;
        animation-name: bgOpacity;
    }

    &:hover .button {
        display: block !important;
        background-color: ${theme.colors?.main};
        width: 100%;
        color: ${theme.colors?.mainText};
        font-weight: bold;
        text-align: center;
        font-size: 22px
    }

`;
