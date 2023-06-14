import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import useColorScheme from "./hooks/useColorScheme";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    // <SafeAreaProvider>
    <Navigation colorScheme={colorScheme} />
    // </SafeAreaProvider>
  );
}
