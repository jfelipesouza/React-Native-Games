import React from "react";
import { View } from "react-native";
import Avatar from "../avatar";
import { Container, Greeting, Mensage, User, UserName } from "./styled";

const Profile: React.FC = () => {
  return (
    <Container>
      <Avatar urlImage={"https://www.github.com/jfelipesouza.png"} />
      <View>
        <User>
          <Greeting> Olá, </Greeting>
          <UserName>Felipe</UserName>
        </User>
        <Mensage>Hoje é dia de vitoria</Mensage>
      </View>
    </Container>
  );
};

export default Profile;
