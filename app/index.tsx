import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { sizes } from "@/constants/metrics";
import { Ionicons } from "@expo/vector-icons";

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
          <Text style={styles.title}>Wookie Movies</Text>
          <Pressable
            onPress={() => router.push("home")}
            style={styles.startButton}
          >
            <Text style={styles.startText}>Start Explore</Text>
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
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  gradient: {
    width: "100%",
    height: "65%",
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: sizes.level_4,
    padding: sizes.level_7,
  },
  title: {
    fontSize: sizes.level_6,
    color: "black",
    fontWeight: "bold",
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: sizes.level_3,
    backgroundColor: "black",
    padding: sizes.level_4,
    paddingHorizontal: sizes.level_8,
    borderRadius: sizes.level_4,
    borderCurve: "continuous",
  },
  startText: {
    color: "white",
    fontSize: sizes.level_4,
    fontWeight: "medium",
    letterSpacing: 1,
  },
});
