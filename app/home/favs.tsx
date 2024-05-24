import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/Common/ThemedView";
import { ThemedText } from "@/components/Common/ThemedText";
import { theme } from "@/constants/Colors";
import { sizes } from "@/constants/metrics";
import { router } from "expo-router";
import { queryClient } from "@/services/queryClient";

export default function FavsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor=""
      headerImage={
        <Ionicons size={310} name="heart" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Coming soon</ThemedText>
        <Pressable
          onPress={() => {
            queryClient.clear();
            router.replace("/");
          }}
          style={styles.goHome}
        >
          <ThemedText style={styles.title}>Home</ThemedText>
        </Pressable>
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
  container: {
    gap: sizes.level_6,
  },
  goHome: {
    backgroundColor: theme.colors.neutral(0.8),
    alignSelf: "center",
    paddingVertical: sizes.level_2,
    paddingHorizontal: sizes.level_4,
    borderRadius: sizes.level_3,
    borderCurve: "continuous",
  },
  title: {
    color: theme.colors.white,
  },
});
