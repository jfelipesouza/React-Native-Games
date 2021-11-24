import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 30px;
  align-items: center;
`;

export const HomeContent = styled.View`
  margin-top: 42px;
`;

export const HomeList = styled.FlatList`
  margin-top:24px;
  margin-left:20px;
`;