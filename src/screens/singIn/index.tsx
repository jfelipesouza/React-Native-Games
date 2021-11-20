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

const SingIN: React.FC = () => {
  return (
    <SingInContainer>
      <SingInImage source={Illustration} resizeMode={"stretch"} />

      <SingInContent>
        <SingInTitle>Conecte-se e Organize suas partidas</SingInTitle>
        <SingInSubTitle>
          Crie grupos para jogar seus games favoritos com seus amigos
        </SingInSubTitle>
      </SingInContent>
      <ButtonIcon activeOpacity={0.7} buttonText={"Entrar com o Discord"} />
    </SingInContainer>
  );
};

export default SingIN;
