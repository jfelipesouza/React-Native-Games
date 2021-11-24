import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components";
import {
  CategoryBackground,
  CategoryCard,
  CategoryContainer,
  CategoryContent,
  CategoryTitle,
} from "./styled";

type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: Boolean;
};

const Category: React.FC<CategoryProps> = ({
  title,
  icon: Icon,
  checked = true,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <CategoryContainer {...rest}>
      <CategoryBackground colors={[colors.secondary50, colors.secondary70]}>
        <CategoryContent style={{ opacity: checked ? 1 : 0.5 }}>
          <CategoryCard checked={checked} />
          <Icon width={48} height={48} />
          <CategoryTitle>{title}</CategoryTitle>
        </CategoryContent>
      </CategoryBackground>
    </CategoryContainer>
  );
};

export default Category;
