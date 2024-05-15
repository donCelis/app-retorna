import { Image, Pressable, StyleSheet, View } from "react-native";

import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { sizes } from "@/constants/metrics";
import { Ionicons } from "@expo/vector-icons";
import { hp, wp } from "@/utils/dimensions";
import { ThemedText } from "@/components/Common/ThemedText";
import { Colors, theme } from "@/constants/Colors";

export default function RootScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("@/assets/images/initImage.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.container}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        <View style={styles.contentContainer}>
          <ThemedText type="title">Wookie Movies</ThemedText>
          <Pressable
            onPress={() => router.push("home")}
            style={styles.startButton}
          >
            <ThemedText type="defaultSemiBold" style={styles.startText}>
              Start Explore
            </ThemedText>
            <Ionicons name="play" size={sizes.level_4} color={"white"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: sizes.level_4,
    padding: sizes.level_8,
    paddingBottom: sizes.level_12,
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: sizes.level_3,
    backgroundColor: Colors.dark.primary,
    padding: sizes.level_4,
    paddingHorizontal: sizes.level_8,
    borderRadius: sizes.level_5,
    borderCurve: "continuous",
  },
  startText: {
    letterSpacing: 1,
    color: theme.colors.white,
  },
});
