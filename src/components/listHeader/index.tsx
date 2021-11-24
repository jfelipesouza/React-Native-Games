import React from "react";
import { ListContainer, ListSubTitle, ListTitle } from "./styled";

type ListHeaderProps = {
  title?: string;
  subtitle?: string;
};
const ListHeader: React.FC<ListHeaderProps> = ({ title, subtitle }) => {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <ListSubTitle>{subtitle}</ListSubTitle>
    </ListContainer>
  );
};

export default ListHeader;
