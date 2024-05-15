import { StyleSheet, View } from "react-native";
import { Movie } from "@/types/movie";
import { Image } from "expo-image";
import {
  ANIMATION_IMAGE_DEFAULT,
  HEIGHT_IMAGE_CARD,
  sizes,
} from "@/constants/metrics";
import { getYear } from "date-fns";
import { theme } from "@/constants/Colors";
import ParallaxScrollView from "../ParallaxScrollView";
import { ThemedText } from "../Common/ThemedText";
import { ThemedView } from "../Common/ThemedView";
import { StartRating } from "./components/StartRating";

const stringToArray = (input: string | string[]): string[] => {
  return typeof input === "string" ? [input] : input;
};

export const MovieById = ({ movie }: { movie: Movie | undefined }) => {
  if (!movie) return null;

  return (
    <ParallaxScrollView
      headerBackgroundColor={theme.colors.neutral(0.8)}
      headerImage={
        <Image
          source={{ uri: movie.backdrop }}
          style={styles.backdrop}
          contentFit="cover"
          transition={ANIMATION_IMAGE_DEFAULT}
        />
      }
    >
      <View style={styles.posterContainer}>
        <Image
          style={styles.posterImage}
          source={{ uri: movie.poster }}
          contentFit="cover"
          transition={ANIMATION_IMAGE_DEFAULT}
        />
        <View style={styles.infoHeader}>
          <ThemedText type="subtitle">{movie.title}</ThemedText>
          <StartRating rating={movie.imdb_rating} />
          <ThemedText>
            <ThemedText type="defaultSemiBold">PG: </ThemedText>
            {movie.classification}
          </ThemedText>
        </View>
      </View>
      <ThemedView style={{ ...styles.section, gap: sizes.level_4 }}>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Year: </ThemedText>
          {getYear(movie.released_on)}
        </ThemedText>
        <ThemedText>|</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Duration: </ThemedText>
          {movie.length}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.section}>
        {movie.genres.map((genre, key) => (
          <View style={styles.section} key={`genre-${key}`}>
            <ThemedText>{genre}</ThemedText>
            {key < movie.genres.length - 1 && <ThemedText>-</ThemedText>}
          </View>
        ))}
      </ThemedView>
      <ThemedView style={{ flexDirection: "row" }}>
        <ThemedView style={styles["w-50"]}>
          <ThemedText type="defaultSemiBold">Cast:</ThemedText>
          {movie.cast.map((character, key) => (
            <View key={`character-${key}`}>
              <ThemedText>{character}</ThemedText>
            </View>
          ))}
        </ThemedView>
        <ThemedView style={styles["w-50"]}>
          <ThemedText type="defaultSemiBold">Directors:</ThemedText>
          {stringToArray(movie.director).map((director, key) => (
            <View key={`director-${key}`}>
              <ThemedText>{director}</ThemedText>
            </View>
          ))}
        </ThemedView>
      </ThemedView>

      <ThemedView>
        <ThemedText>{movie.overview}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  posterContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: sizes.level_4,
    marginTop: -HEIGHT_IMAGE_CARD / 2,
  },
  posterImage: { width: "50%", height: HEIGHT_IMAGE_CARD },
  infoHeader: { flex: 1, gap: sizes.level_2, paddingBottom: sizes.level_4 },
  section: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: sizes.level_2,
  },
  backdrop: {
    width: "100%",
    height: "100%",
  },
  "w-50": { flexBasis: "50%", flex: 1 },
});
