import React, { useState } from "react";
import {
  Platform,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Screen } from "../components/Screen";
import { ModalHeader } from "../components/ModalHeader";
import { Button, Input } from "@ui-kitten/components";
import { theme } from "../theme";
import { Row } from "../components/Row";
import { useNavigation } from "@react-navigation/native";
import { getSuggestedLocations } from "../services/location";
import { Location } from "../types/locationIQ";

export const FindLocationsScreen = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const navigation = useNavigation();
  const handleChange = async (val: string) => {
    setValue(val);
    if (val.length > 2) {
      const locations = await getSuggestedLocations(val);
      if (locations.length > 2) setSuggestions(locations);
    } else if (val.length === 0) setSuggestions([]);
  };
  const handleSubmitEditing = async () => {
    const locations = await getSuggestedLocations(value);
    if (locations.length > 0) {
      handleNavigate(locations[0]);
    }
  };
  const handleNavigate = (location: Location) => {
    navigation.navigate("Root", {
      screen: "Search",
      params: {
        location: getFormattedLocationText(location),
        lat: location.lat,
        lon: location.lon,
        boundingBox: location.boundingbox
      }
    });
  };
  const SuggestedTest = ({ locationItem }: { locationItem: Location }) => {
    const Location = getFormattedLocationText(locationItem);
    return (
      <Row style={styles.suggestionContainer}>
        <Text>{location}</Text>
      </Row>
    );
  };
  const getInput = () => {
    if (Platform.OS === "ios")
      return (
        <Input
          keyboardType="default"
          autoFocus
          selectionColor={theme["color-primary-500"]}
          placeholder="Enter location"
          size={"large"}
          value={value}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmitEditing}
          style={styles.defaultMarginTop}
        />
      );
    return (
      <Row>
        <Input
          keyboardType="default"
          autoFocus
          selectionColor={theme["color-primary-500"]}
          placeholder="Enter location"
          size={"large"}
          value={value}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmitEditing}
          style={[styles.defaultMarginTop, { width: "80%" }]}
        />
        <Button
          appearance="ghost"
          status="info"
          onPress={() => navigation.goBack()}
        >
          Cancel
        </Button>
      </Row>
    );
  };
  const getFormattedLocationText = (item: Location) => {
    let location = item.address.name;
    if (item.type === "city" && item.address.state)
      location += ", " + item.address.state;
    return location;
  };
  const SuggestedText = ({ locationItem }: { location: Location }) => {
    const location = getFormattedLocationText(locationItem);
    return (
      <Row style={styles.suggestionContainer}>
        <Text>{location}</Text>
      </Row>
    );
  };
  return (
    <Screen>
      {Platform.OS === "ios" ? <ModalHeader /> : null}
      <View style={styles.screenContent}>
        {getInput()}
        {suggestions.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={suggestions}
            keyExtractor={(item, index) => item.place_id + index}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  handleNavigate(item);
                }}
              >
                <SuggestedText locationItem={item} />
              </TouchableOpacity>
            )}
          />
        ) : (
          <ScrollView bounces={false}></ScrollView>
        )}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContent: {
    marginHorizontal: 10
  },
  defaultMarginTop: {
    marginTop: 10
  },
  suggestionContainer: {
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme["color-gray"]
  },
  currentLocationButton: {
    marginTop: 40
  },
  recentSearchContainer: { marginTop: 30 }
});
