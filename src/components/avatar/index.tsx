import React from "react";
import { useTheme } from "styled-components";
import { AvatarContainer, AvatarImage } from "./styled";

type AvatarProps = {
  urlImage: string;
};

const Avatar: React.FC<AvatarProps> = ({ urlImage }) => {
  const theme = useTheme();

  const colors = [theme.colors.secondary50, theme.colors.secondary70];
  return (
    <AvatarContainer colors={colors}>
      <AvatarImage source={{ uri: urlImage }} resizeMode={"stretch"} />
    </AvatarContainer>
  );
};

export default Avatar;
