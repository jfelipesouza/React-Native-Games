import React from "react";
import { useTheme } from "styled-components";
import { RectButtonProps } from "react-native-gesture-handler";
import { ButtonContainer } from "./styled";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ButtonAdd: React.FC<RectButtonProps> = ({ ...rest }) => {
  const { colors } = useTheme();
  return (
    <ButtonContainer>
      <MaterialCommunityIcons name={"plus"} color={colors.heading} size={24} />
    </ButtonContainer>
  );
};

export default ButtonAdd;
