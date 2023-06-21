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
import CardInformation from "./CardInformation";

export const Card = ({
  property,
  style
}: {
  property: Property;
  style?: ViewStyle;
}) => {
  return (
    <View style={style}>
      <ImageCarousel images={property.images} />
      <CardInformation property={property} />
    </View>
  );
};
