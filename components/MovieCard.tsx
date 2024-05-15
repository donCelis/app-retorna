import {
  ANIMATION_IMAGE_DEFAULT,
  HEIGHT_IMAGE_CARD,
  sizes,
} from "@/constants/metrics";
import { Movie } from "@/types/movie";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@/constants/Colors";

export const MovieCard = ({ poster, title, slug, imdb_rating }: Movie) => {
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "movie/[id]",
          params: { id: slug },
        })
      }
      style={styles.container}
    >
      <View style={{ gap: sizes.level_1 }}>
        <View style={styles.poster}>
          <View style={styles.badge}>
            <Ionicons name="star" color={"#f1c40f"} size={14} />
            <ThemedText style={{ color: "white", fontSize: 14 }}>
              {imdb_rating}
            </ThemedText>
          </View>
          <Image
            style={styles.posterImage}
            source={{ uri: poster }}
            contentFit="cover"
            transition={ANIMATION_IMAGE_DEFAULT}
          />
        </View>
        <View>
          <ThemedText style={styles.titleMovie} numberOfLines={1}>
            {title}
          </ThemedText>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { padding: sizes.level_3 },
  poster: { position: "relative" },
  posterImage: {
    height: HEIGHT_IMAGE_CARD,
    width: "100%",
    borderRadius: sizes.level_2,
  },
  titleMovie: { color: theme.colors.neutral(0.8) },
  badge: {
    position: "absolute",
    right: sizes.level_3,
    bottom: sizes.level_3,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: sizes.level_2,
    backgroundColor: theme.colors.neutral(0.7),
    borderRadius: sizes.level_2,
    padding: sizes.level_1,
    paddingHorizontal: sizes.level_2,
    borderCurve: "continuous",
  },
});
