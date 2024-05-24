import { theme } from "@/constants/Colors";
import {
  ANIMATION_IMAGE_DEFAULT,
  HEIGHT_IMAGE_CARD,
  sizes,
} from "@/constants/metrics";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../Common/ThemedText";
import { router } from "expo-router";

type Props = {
  genre: string;
  image: string;
};

export const GenreCard = ({ genre, image }: Props) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() =>
        router.push({
          pathname: "genre/[name]",
          params: { name: genre },
        })
      }
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={image}
          transition={ANIMATION_IMAGE_DEFAULT}
          contentFit="cover"
        />
        <LinearGradient
          colors={[theme.colors.neutral(0), theme.colors.neutral(0.6)]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.5 }}
        />
        <ThemedText style={styles.title}>{genre}</ThemedText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: { padding: sizes.level_3 },
  container: {
    position: "relative",
    overflow: "hidden",
    borderRadius: sizes.level_2,
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  image: {
    height: HEIGHT_IMAGE_CARD / 2.5,
    width: "100%",
  },
  title: {
    color: theme.colors.white,
    position: "absolute",
    bottom: sizes.level_3,
    left: sizes.level_3,
  },
});