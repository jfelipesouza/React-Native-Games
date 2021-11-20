import styled from "styled-components/native";

export const SingInContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SingInImage = styled.Image`
  width: 100%;
  
`;

export const SingInContent = styled.View`
  margin-Top: -15%;

`;

export const SingInTitle = styled.Text`
  flex-wrap: wrap;
  text-align: center;
  font-size: 35px;
  color:${({theme})=>theme.colors.heading};
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 16px;

`;

export const SingInSubTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  color:${({theme})=>theme.colors.heading};
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 60px;
`;
