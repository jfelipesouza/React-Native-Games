import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { CategoryContainer } from "./styled";

type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: Boolean;
};

const Category: React.FC<CategoryProps> = ({ title, icon, checked }) => {
  return <CategoryContainer />;
};

export default Category;
