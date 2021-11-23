import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


export const User = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Greeting = styled.Text`
  font-family: ${({theme})=>theme.font.title500};
  font-size: 24px;
  color:${({theme})=>theme.colors.heading};
  margin-right: 6px;
`;

export const UserName = styled.Text`
  font-family: ${({theme})=>theme.font.title700};
  font-size: 24px;
  color:${({theme})=>theme.colors.heading};
`;


export const Mensage = styled.Text`
  font-family: ${({theme})=>theme.font.text400};
  font-size: 20px;
  color:${({theme})=>theme.colors.highlight};
`;