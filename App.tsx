import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import SingIN from "./src/screens/singIn";
import { ThemeProvider } from "styled-components";
import { light } from "./src/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <StatusBar backgroundColor={"#0D133E"} barStyle={"light-content"} />
      <SingIN />
    </ThemeProvider>
  );
}
