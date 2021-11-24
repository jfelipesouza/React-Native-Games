import React, { useState } from "react";
import { useTheme } from "styled-components";
import Appointement from "../../components/appointement";
import { BackgroundGradient } from "../../components/background-gradient";
import ButtonAdd from "../../components/buttonAdd";
import CategorySelect from "../../components/categorySelect";
import ListDivider from "../../components/listdivider";
import ListHeader from "../../components/listHeader";
import Profile from "../../components/profile";
import { Container, Header, HomeContent, HomeList } from "./styled";

const Home: React.FC = () => {
  const { colors } = useTheme();
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendarios",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenge sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendarios",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenge sem perder uma partida da md10",
    },
    {
      id: "3",
      guild: {
        id: "1",
        name: "Lendarios",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenge sem perder uma partida da md10",
    },
    {
      id: "4",
      guild: {
        id: "1",
        name: "Lendarios",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenge sem perder uma partida da md10",
    },
    {
      id: "5",
      guild: {
        id: "1",
        name: "Lendarios",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenge sem perder uma partida da md10",
    },
    {
      id: "6",
      guild: {
        id: "1",
        name: "Lendarios",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenge sem perder uma partida da md10",
    },
    {
      id: "7",
      guild: {
        id: "1",
        name: "Lendarios",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenge sem perder uma partida da md10",
    },
    {
      id: "8",
      guild: {
        id: "1",
        name: "Lendarios",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenge sem perder uma partida da md10",
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  return (
    <BackgroundGradient colors={[colors.secondary80, colors.secondary100]}>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd />
        </Header>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <HomeContent>
          <ListHeader title={"Partidas Agendadas"} subtitle={"Total: 6"} />
        </HomeContent>

        <HomeList
          data={appointments}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => <Appointement data={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </Container>
    </BackgroundGradient>
  );
};

export default Home;
