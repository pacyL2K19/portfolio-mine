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
