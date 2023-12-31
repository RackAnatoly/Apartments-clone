import React, { useState, useRef } from "react";
import { View, StyleSheet, Platform, TouchableOpacity } from "react-native";
import MapView, { Region } from "react-native-maps";
import { theme } from "../theme";
import { Property } from "../types/property";
import { MapMarker } from "./MapMarker";
import { useNavigation } from "@react-navigation/native";
import { Card } from "./Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Map = ({ properties }: { properties: Property[] }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const mapRef = useRef<MapView | null>(null);
  const navigation = useNavigation();

  const unFocusProperty = () => {
    setActiveIndex(-1);
    navigation.setOptions({ tabBarStyle: { display: "flex" } });
  };

  const handleMapPress = () => {
    if (Platform.OS === "android") unFocusProperty();
  };
  const handleMarkerPress = (index: number) => {
    setTimeout(() => {
      mapRef.current?.animateCamera({
        center: {
          latitude: properties[index].lat,
          longitude: properties[index].lng
        }
      });
    }, 100);

    setActiveIndex(index);
    navigation.setOptions({ tabBarStyle: { display: "none" } });
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        userInterfaceStyle={"light"}
        ref={mapRef}
        onPress={handleMapPress}
      >
        {properties &&
          properties.map((i, index) => (
            <MapMarker
              key={i.id}
              lat={i.lat}
              lng={i.lng}
              color={
                activeIndex === index
                  ? theme["color-info-400"]
                  : theme["color-primary-500"]
              }
              onPress={() => handleMarkerPress(index)}
            />
          ))}
      </MapView>
      {activeIndex > -1 && (
        <>
          {Platform.OS === "ios" && (
            <TouchableOpacity style={styles.exit} onPress={unFocusProperty}>
              <MaterialCommunityIcons
                name="close"
                color={theme["color-primary-500"]}
                size={24}
              />
            </TouchableOpacity>
          )}
          <Card property={properties[activeIndex]} style={styles.card} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden"
  },
  map: {
    height: "100%",
    width: "100%"
  },
  card: {
    position: "absolute",
    bottom: 10
  },
  exit: {
    backgroundColor: "#fff",
    padding: 10,
    position: "absolute",
    top: 170,
    left: 15,
    borderRadius: 30
  },
  searchAreaButton: {
    position: "absolute",
    bottom: 30,
    zIndex: 100,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: theme["color-gray"],
    borderWidth: 1
  }
});
