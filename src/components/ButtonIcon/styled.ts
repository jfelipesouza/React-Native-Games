import styled from "styled-components/native";
import {RectButton} from 'react-native-gesture-handler';

export const ButtonContainer = styled(RectButton)`
  width: 90%;
  height: 56px;
  background-color: ${({theme})=>theme.colors.primary};
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ButtonImageWrapper = styled.View`
  width: 56px;
  height: 50px;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 0;
  border-right-width:1px ;
  border-right-color:${({theme})=>theme.colors.line} ;
`;


export const ButtonText = styled.Text`
  color:#ddd;
  font-size: 18px;
`;