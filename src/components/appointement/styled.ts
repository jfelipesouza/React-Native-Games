import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const AppointementButton = styled(RectButton)`
  /* não mexer aqui */
`;

export const AppointementContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-self:center;
`;

export const AppointementContent = styled.View`
  flex:1;
`;

export const AppointementHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const AppointementFooter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const AppointementDateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const AppointementPlayInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AppointementTitle = styled.Text`
  font-family:${({theme})=>theme.font.title700};
  color:${({theme})=>theme.colors.heading};
  font-size: 18px;
  `;

export const AppointementCategory = styled.Text`
  font-family:${({theme})=>theme.font.text400};
  color:${({theme})=>theme.colors.highlight};
  font-size: 13px;
  margin-right: 24px;
  
  `;

export const AppointementPlayers = styled.Text`
  font-family: ${({theme})=>theme.font.text500};
  font-size:13px;
  margin-left: 15px;
  margin-right: 24px;
`;

export const AppointementDate = styled.Text`
  font-family:${({theme})=>theme.font.text500};
  color:${({theme})=>theme.colors.heading};
  font-size: 13px;
  margin-left: 7px;
`;