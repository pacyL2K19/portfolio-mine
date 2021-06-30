import styled from "styled-components";
import { colors } from "../core/theme/colors";

export const ButtonBox = styled.div`
  padding: 10px 14px;
  margin-top: 50px;
  border-radius: 5px;
  color: ${colors.mainText};
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
  background-color: ${colors.main};
  justify-content: space-around;
`;

export const NoticeContainer = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 250px;
  right: 100px;

  // For mobile layouts

  @media only screen and (max-width: 425px) {
    bottom: 180px;
    right: 0;
  }
`;
