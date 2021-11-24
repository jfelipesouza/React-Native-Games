import styled from 'styled-components/native';



export const ListContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

export const ListTitle = styled.Text`
  font-family: ${({theme})=>theme.font.title700};
  color:${({theme})=>theme.colors.heading};
  font-size: 18px;

`;


export const ListSubTitle = styled.Text`
  font-family: ${({theme})=>theme.font.text400};
  color:${({theme})=>theme.colors.highlight};
  font-size: 13px;

`;