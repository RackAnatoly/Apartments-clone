import React, { useState } from "react";
import {
  Animated,
  LayoutChangeEvent,
  Platform,
  TouchableOpacity,
  View,
  StyleSheet,
  LogBox
} from "react-native";
import { HEADERHEIGHT, LISTMARGIN } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../theme";
import { Divider, Text } from "@ui-kitten/components";
import { Row } from "./Row";
import { HeaderFilterButtons } from "./HeaderFilterButtons";
import { HeaderInput } from "./HeaderInput";
import { HeaderLogistics } from "./HeaderLogistics";

export const AnimatedListHeaer = ({
  scrollAnimation
}: {
  scrollAnimation: Animated.Value;
}) => {
  const [offsetAnimationAnimation] = useState(new Animated.Value(0));
  const [clampedScroll, setClampeedScroll] = useState(
    Animated.diffClamp(
      Animated.add(
        scrollAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolateLeft: "clamp"
        }),
        offsetAnimationAnimation
      ),
      0,
      1
    )
  );
  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, HEADERHEIGHT],
    outputRange: [0, -HEADERHEIGHT],
    extrapolate: "clamp"
  });

  const onLayout = (event: LayoutChangeEvent) => {
    let { height } = event.nativeEvent.layout;
    setClampeedScroll(
      Animated.diffClamp(
        Animated.add(
          scrollAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: "clamp"
          }),
          offsetAnimationAnimation
        ),
        0,
        height
      )
    );
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: navbarTranslate }]
        }
      ]}
      onLayout={onLayout}
    >
      <View style={styles.defaultMarginHorizontal}>
        <HeaderInput />
        <HeaderFilterButtons />
      </View>
      <Divider style={styles.divider} />
      <HeaderLogistics />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    height: HEADERHEIGHT,
    backgroundColor: "#fff"
  },
  defaultMarginHorizontal: {
    marginHorizontal: LISTMARGIN
  },
  divider: { backgroundColor: theme["color-gray"] }
});
