import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { ButtonContainer, ButtonImageWrapper, ButtonText } from "./styled";
import DiscordIcon from "../../assets/discord.svg";

type ButtonIconProps = RectButtonProps & {
  buttonText?: string;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ buttonText, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonImageWrapper>
        <DiscordIcon />
      </ButtonImageWrapper>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonIcon;
