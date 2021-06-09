import styled from "styled-components";
import { theme } from "../../core/theme";

export const ImageContainer = styled.div`
  height: 500px;
  background-color: ${theme.colors?.activeBtn};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  @media only screen and (max-width: 425px) {
    height: 250px;
  }
`;
