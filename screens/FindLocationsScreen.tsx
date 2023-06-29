import React, { useState } from "react";
import { Platform, Text, StyleSheet, View } from "react-native";
import { Screen } from "../components/Screen";
import { ModalHeader } from "../components/ModalHeader";
import { Button, Input } from "@ui-kitten/components";
import { theme } from "../theme";
import { Row } from "../components/Row";
import { useNavigation } from "@react-navigation/native";

export const FindLocationsScreen = () => {
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  const handleChange = async (val: string) => {};
  const handleSubmitEditing = async () => {};
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
  return (
    <Screen>
      {Platform.OS === "ios" ? <ModalHeader /> : null}
      <View style={styles.screenContent}>{getInput()}</View>
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
