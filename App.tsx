import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";
import { light } from "./src/styles/theme";
import { Routes } from "./src/screens/routes/index.routes";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Inter_400Regular,
    Rajdhani_700Bold,
    Inter_500Medium,
    Rajdhani_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={light}>
      <StatusBar
        backgroundColor={light.colors.secondary100}
        barStyle={"default"}
      />
      <Routes />
    </ThemeProvider>
  );
}
