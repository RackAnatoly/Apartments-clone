import React, { useRef, useState } from "react";
import { FlatList, Pressable, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { WIDTH } from "../constants";
import { log } from "react-native-reanimated";

const ImageCarousel = ({ images }: { images: string[] }) => {
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
        index: images.length - 1
      });

    flatListRef.current?.scrollToIndex({
      index: activeIndex - 1
    });
  };
  const handlePressRight = () => {
    if (activeIndex === images.length - 1)
      return flatListRef.current?.scrollToIndex({
        animated: false,
        index: 0
      });

    flatListRef.current?.scrollToIndex({
      index: activeIndex + 1
    });
  };
  return (
    <>
      <FlatList
        ref={(ref) => (flatListRef.current = ref)}
        data={images}
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
              height: 200,
              width: WIDTH,
              borderRadius: 5
            }}
          />
        )}
        keyExtractor={(item, index) => item + index}
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
    </>
  );
};

export default ImageCarousel;
