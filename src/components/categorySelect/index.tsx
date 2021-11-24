import React from "react";
import { CategoryListContainer } from "./styled";
import { categories } from "../../utils/category";
import Category from "../category";

type CategorySelectProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

const CategorySelect: React.FC<CategorySelectProps> = ({
  categorySelected,
  setCategory,
}) => {
  return (
    <CategoryListContainer
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          title={category.title}
          key={category.id}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </CategoryListContainer>
  );
};

export default CategorySelect;
