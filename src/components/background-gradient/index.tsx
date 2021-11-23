import React from "react";
import { Container } from "./styled";

export const BackgroundGradient: React.FC<BackgroundProps> = ({
  children,
  colors,
}) => {
  return <Container colors={colors}>{children}</Container>;
};

type BackgroundProps = {
  colors: string[];
};
