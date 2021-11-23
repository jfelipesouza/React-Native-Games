import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const ButtonContainer = styled(RectButton)`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
