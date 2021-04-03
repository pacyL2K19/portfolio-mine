import styled from "styled-components";
import { colors } from "../core/theme/colors";

export const ButtonBox = styled.div`
    padding: 8px 20px;
    margin-top: 50px;
    border-radius: 10;
    color: white;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    align-items: center;
    background-color: ${colors.activeBtn};
    justify-content: space-around
`
