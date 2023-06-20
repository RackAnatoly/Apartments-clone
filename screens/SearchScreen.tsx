import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screen } from "../components/Screen";
import { Button, Text } from "@ui-kitten/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../theme";
import { useRef, useState } from "react";
import { Card } from "../components/Card";

const LISTMARGIN = 10;

export const SearchScreen = () => {
  const properties = [
    {
      id: 1,
      images: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3FID%3DOIP.P4DMJbCaao_dpIs5dCb6IgHaLH%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iE7mcw3w2aFFDhXP9A1lggHaE8%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sN1pVaQ7SMfmzIydnPSKcgHaH1%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q5Eunmn9ENDDwvQPZBCRdwHaE7%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Oe74GIp-Ini-tIVYe0bH6wHaE7%26pid%3DApi&f=1"
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: "The Hamilton",
      street: "555 NE 34th St",
      city: "Miami",
      state: "Florida",
      zip: 33137,
      tags: ["Parking"]
    },
    {
      id: 2,
      images: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3FID%3DOIP.P4DMJbCaao_dpIs5dCb6IgHaLH%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iE7mcw3w2aFFDhXP9A1lggHaE8%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sN1pVaQ7SMfmzIydnPSKcgHaH1%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q5Eunmn9ENDDwvQPZBCRdwHaE7%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Oe74GIp-Ini-tIVYe0bH6wHaE7%26pid%3DApi&f=1"
      ],
      rentLow: 3750,
      rentHigh: 31054,
      bedroomLow: 1,
      bedroomHigh: 5,
      name: "The Hamilton",
      street: "555 NE 34th St",
      city: "Miami",
      state: "Florida",
      zip: 33137,
      tags: ["Parking"]
    }
  ];

  return (
    <Screen style={{ marginHorizontal: LISTMARGIN }}>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 5 }} property={item} />
        )}
      />
    </Screen>
  );
};
