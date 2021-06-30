import styled from "styled-components";
import { colors } from "../core/theme/colors";

export const ButtonBox = styled.div`
  padding: 10px 14px;
  margin-top: 50px;
  border-radius: 10px;
  color: ${colors.mainText};
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
  background-color: ${colors.main};
  box-shadow: 0 0 10px ${colors.mainText};
  justify-content: space-around;
`;
