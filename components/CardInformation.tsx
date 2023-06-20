import React from "react";

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
import ImageCarousel from "./ImageCarousel";
import { Row } from "./Row";

const CardInformation = ({ property }: { property: Property }) => {
  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderColor: "#d3d3d3",
        borderRadius: 5,
        borderWidth: 1
      }}
    >
      <Row
        style={{
          justifyContent: "space-between"
        }}
      >
        <Text category={"s1"}>
          ${property.rentLow} - {property.rentHigh}
        </Text>
        <MaterialCommunityIcons
          name="heart-outline"
          size={24}
          color={theme["color-primary-500"]}
        />
      </Row>
      <Text category={"c1"}>
        {property.bedroomLow}-{property.bedroomHigh} Beds
      </Text>
      <Text category={"c1"} style={{ marginTop: 5 }}>
        {property.name}
      </Text>
      <Text category={"c1"}>{property.street}</Text>
      <Text category={"c1"}>
        {property.city},{property.state},{property.zip}
      </Text>
      <Text category={"c1"} style={{ marginTop: 5 }}>
        {property?.tags?.map((tag, index) =>
          index === property.tags.length - 1 ? tag : `${tag}`
        )}
      </Text>
      <Row
        style={{
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
      </Row>
    </View>
  );
};

export default CardInformation;
