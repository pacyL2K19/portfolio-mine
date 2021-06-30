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
    font-size: 22px;
  }
`;

export const ProjectLabel = styled.h3`
  background-color: ${theme.colors?.main};
  color: ${theme.colors?.mainText};
  text-align: center;
  margin: 20px -20px 0 20px;
  padding: 10px;
  border-radius: 0 30px 30px 0;

  // For mobile layouts

  @media only screen and (max-width: 425px) {
    margin: 20px -20px 0 20px;
    font-size: 18px;
  }
`;

export const ProjectDescription = styled.p`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  color: white;
  font-size: 18px;
  margin-top: 40px;
  padding: 20px;
  
  // For mobile layouts

  @media only screen and (max-width: 425px) {
    margin-top: 50px;
    font-size: 14px;
  }
`;
