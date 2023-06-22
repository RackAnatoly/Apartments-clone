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
import { LISTMARGIN } from "../constants";

export const Card = ({
  property,
  style
}: {
  property: Property;
  style?: ViewStyle;
}) => {
  return (
    <View style={[styles.container, style]}>
      <ImageCarousel images={property.images} />
      <CardInformation property={property} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: LISTMARGIN,
    borderRadius: 5,
    backgroundColor: "white"
  },
  ellipses: {
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 5,
    paddingHorizontal: 5,
    top: 10,
    right: 15
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
    position: "absolute",
    top: Dimensions.get("screen").height / 3,
    right: Dimensions.get("screen").width / 4
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  }
});
