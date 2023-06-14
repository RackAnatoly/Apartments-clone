import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import useColorScheme from "./hooks/useColorScheme";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { theme } from "./theme";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <ApplicationProvider {...eva} theme={theme}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    </ApplicationProvider>
  );
}
