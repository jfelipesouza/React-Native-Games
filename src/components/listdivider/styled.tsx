import styled from "styled-components/native";

export const ListDividerContainer = styled.View`
  width: 80%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.secondary40};
  margin: 21px;
  align-self: flex-end;
`;
