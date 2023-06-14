import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { ColorSchemeName, Pressable } from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountTabParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps
} from "../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SavedScreen } from "../screens/SavedScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { theme } from "../theme";

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}></Stack.Group>
      {/* <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Saved"
      screenOptions={{
        tabBarActiveTintColor: theme["color-primary-500"]
      }}
    >
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="magnify" color={color} />
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="heart-outline" color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name="AccountRoot"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="account-circle-outline" color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />
  );
}
