import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Pressable,
  ViewStyle
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screen } from "../components/Screen";
import { Button, Text } from "@ui-kitten/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../theme";
import { useRef, useState } from "react";
import { Property } from "../types/property";

export const Card = ({
  property,
  style
}: {
  property: Property;
  style?: ViewStyle;
}) => {
  return (
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
        <MaterialCommunityIcons name="chevron-left" color="white" size={45} />
      </Pressable>
      <Pressable
        style={{ position: "absolute", top: 95, right: 5 }}
        onPress={handlePressRight}
      >
        <MaterialCommunityIcons name="chevron-right" color="white" size={45} />
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
  );
};
