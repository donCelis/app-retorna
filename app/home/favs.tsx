import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function FavsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor=""
      headerImage={
        <Ionicons size={310} name="heart" style={styles.headerImage} />
      }
    >
      <ThemedView>
        <ThemedText type="title">Coming soon</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
