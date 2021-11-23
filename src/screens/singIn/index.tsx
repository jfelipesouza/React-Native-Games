import React from "react";
import {
  SingInContainer,
  SingInContent,
  SingInImage,
  SingInSubTitle,
  SingInTitle,
} from "./styled";
import Illustration from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import { BackgroundGradient } from "../../components/background-gradient";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

const SingIN: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleSingIn = () => {
    navigation.navigate("home" as any);
  };

  return (
    <BackgroundGradient colors={[colors.secondary80, colors.secondary100]}>
      <SingInContainer>
        <SingInImage source={Illustration} resizeMode={"stretch"} />

        <SingInContent>
          <SingInTitle>Conecte-se e Organize suas partidas</SingInTitle>
          <SingInSubTitle>
            Crie grupos para jogar seus games favoritos com seus amigos
          </SingInSubTitle>
        </SingInContent>
        <ButtonIcon
          buttonText={"Entrar com o Discord"}
          onPress={() => handleSingIn()}
        />
      </SingInContainer>
    </BackgroundGradient>
  );
};

export default SingIN;
