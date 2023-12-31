import { FlatList, Animated, LayoutChangeEvent, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screen } from "../components/Screen";
import { Button, Text } from "@ui-kitten/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../theme";
import { useRef, useState } from "react";
import { Card } from "../components/Card";
import { HEADERHEIGHT } from "../constants";
import { AnimatedListHeader } from "../components/AnimatedListHeaer";
import MapView from "react-native-maps";
import { properties } from "../data/properties";
import { Map } from "../components/Map";
const LISTMARGIN = 10;

export const SearchScreen = () => {
  const [scrollAnimation] = useState(new Animated.Value(0));
  const [mapShown, setMapShown] = useState<boolean>(false);

  return (
    <Screen>
      <AnimatedListHeader
        scrollAnimation={scrollAnimation}
        setMapShown={setMapShown}
        mapShown={mapShown}
      />
      {mapShown ? (
        <Map properties={properties} />
      ) : (
        <Animated.FlatList
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollAnimation
                  }
                }
              }
            ],
            { useNativeDriver: true }
          )}
          style={{ marginHorizontal: LISTMARGIN }}
          contentContainerStyle={{ paddingTop: HEADERHEIGHT - 20 }}
          bounces={false}
          scrollEventThrottle={16}
          data={properties}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card style={{ marginVertical: 5 }} property={item} />
          )}
        />
      )}
    </Screen>
  );
};
