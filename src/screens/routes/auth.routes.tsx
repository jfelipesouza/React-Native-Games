import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home";
import SingIN from "../singIn";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen component={SingIN} name={"singIN"} />
      <Screen component={Home} name={"home"} />
    </Navigator>
  );
};

export default AuthRoutes;
