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

const LISTMARGIN = 10;
const WIDTH = Dimensions.get("screen").width - LISTMARGIN * 2;

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

  const flatListRef = useRef<FlatList | null>(null);
  const viewConfig = { viewAreaCoveragePercentThreshold: 95 };
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setActiveIndex(changed[0].index);
    }
  });
  const handlePressLeft = () => {
    if (activeIndex === 0)
      return flatListRef.current?.scrollToIndex({
        animated: false,
        index: properties.images.length - 1
      });

    flatListRef.current?.scrollToIndex({
      index: activeIndex - 1
    });
  };
  const handlePressRight = () => {
    if (activeIndex === properties.images.length - 1)
      return flatListRef.current?.scrollToIndex({
        animated: false,
        index: 0
      });

    flatListRef.current?.scrollToIndex({
      index: activeIndex + 1
    });
  };
  return (
    <Screen style={{ marginHorizontal: LISTMARGIN }}>
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <FlatList
              ref={(ref) => (flatListRef.current = ref)}
              data={item.images}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment="center"
              pagingEnabled={true}
              viewabilityConfig={viewConfig}
              onViewableItemsChanged={onViewRef.current}
              renderItem={({ item, index }) => (
                <Image
                  source={{ uri: item }}
                  style={{
                    height: 225,
                    width: WIDTH,
                    borderRadius: 5
                  }}
                />
              )}
              keyExtractor={(item) => item}
            />
            <Pressable
              style={{ position: "absolute", top: 95, left: 5 }}
              onPress={handlePressLeft}
            >
              <MaterialCommunityIcons
                name="chevron-left"
                color="white"
                size={45}
              />
            </Pressable>
            <Pressable
              style={{ position: "absolute", top: 95, right: 5 }}
              onPress={handlePressRight}
            >
              <MaterialCommunityIcons
                name="chevron-right"
                color="white"
                size={45}
              />
            </Pressable>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 5,
                borderColor: "#d3d3d3",
                borderRadius: 5,
                borderWidth: 1
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text category={"s1"}>
                  ${item.rentLow} - {item.rentHigh}
                </Text>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={24}
                  color={theme["color-primary-500"]}
                />
              </View>
              <Text category={"c1"}>
                {item.bedroomLow}-{item.bedroomHigh} Beds
              </Text>
              <Text category={"c1"} style={{ marginTop: 5 }}>
                {item.name}
              </Text>
              <Text category={"c1"}>{item.street}</Text>
              <Text category={"c1"}>
                {item.city},{item.state},{item.zip}
              </Text>
              <Text category={"c1"} style={{ marginTop: 5 }}>
                {item?.tags?.map((tag, index) =>
                  index === item.tags.length - 1 ? tag : `${tag}`
                )}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                  justifyContent: "space-between"
                }}
              >
                <Button
                  appearance="ghost"
                  style={{
                    borderColor: theme["color-primary-500"],
                    width: "49%"
                  }}
                  size="small"
                >
                  Email
                </Button>
                <Button style={{ width: "49%" }}>Call</Button>
              </View>
            </View>
          </View>
        )}
      />
    </Screen>
  );
};
