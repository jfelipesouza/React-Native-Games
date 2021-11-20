import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  ButtonContainer,
  ButtonImage,
  ButtonImageWrapper,
  ButtonText,
} from "./styled";
import DiscordIcon from "../../assets/discord.png";

type ButtonIconProps = TouchableOpacityProps & {
  buttonText?: string;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ buttonText, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonImageWrapper>
        <ButtonImage source={DiscordIcon} />
      </ButtonImageWrapper>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonIcon;
