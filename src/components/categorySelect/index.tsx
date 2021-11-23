import React from "react";
import { View } from "react-native";
import { CategoryListContainer } from "./styled";

const CategorySelect: React.FC = () => {
  return (
    <CategoryListContainer
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    ></CategoryListContainer>
  );
};

export default CategorySelect;
