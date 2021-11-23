import React from "react";
import { useTheme } from "styled-components";
import { BackgroundGradient } from "../../components/background-gradient";
import ButtonAdd from "../../components/buttonAdd";
import CategorySelect from "../../components/categorySelect";
import Profile from "../../components/profile";
import { Container, Header } from "./styled";

const Home: React.FC = () => {
  const { colors } = useTheme();

  return (
    <BackgroundGradient colors={[colors.secondary80, colors.secondary100]}>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd />
        </Header>

        <CategorySelect />
      </Container>
    </BackgroundGradient>
  );
};

export default Home;
