import { StyleSheet, View } from "react-native";
import ParallaxScrollView from "./ParallaxScrollView";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Movie } from "@/types/movie";
import { Image } from "expo-image";
import {
  ANIMATION_IMAGE_DEFAULT,
  HEIGHT_IMAGE_CARD,
  sizes,
} from "@/constants/metrics";
import { StartRating } from "./StartRating";
import { getYear } from "date-fns";

const stringToArray = (input: string | string[]): string[] => {
  return typeof input === "string" ? [input] : input;
};

export const MovieById = ({ movie }: { movie: Movie | undefined }) => {
  if (!movie) return null;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
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
          style={{ width: "50%", height: HEIGHT_IMAGE_CARD }}
          source={{ uri: movie.poster }}
          contentFit="cover"
          transition={ANIMATION_IMAGE_DEFAULT}
        />
        <View
          style={{ flex: 1, gap: sizes.level_2, paddingBottom: sizes.level_4 }}
        >
          <ThemedText type="subtitle">{movie.title}</ThemedText>
          <StartRating rating={movie.imdb_rating} />
          <ThemedText>
            <ThemedText type="defaultSemiBold">PG: </ThemedText>
            {movie.classification}
          </ThemedText>
        </View>
      </View>
      <ThemedView
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: sizes.level_4,
        }}
      >
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
      <ThemedView
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: sizes.level_2,
        }}
      >
        {movie.genres.map((genre, key) => (
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: sizes.level_2,
            }}
            key={`genre-${key}`}
          >
            <ThemedText>{genre}</ThemedText>
            {key < movie.genres.length - 1 && <ThemedText>-</ThemedText>}
          </View>
        ))}
      </ThemedView>
      <ThemedView style={{ flexDirection: "row" }}>
        <ThemedView style={{ flexBasis: "50%", flex: 1 }}>
          <ThemedText type="defaultSemiBold">Cast:</ThemedText>
          {movie.cast.map((character, key) => (
            <View key={`character-${key}`}>
              <ThemedText>{character}</ThemedText>
            </View>
          ))}
        </ThemedView>
        <ThemedView style={{ flexBasis: "50%", flex: 1 }}>
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
  stepContainer: {
    gap: 12,
    marginBottom: sizes.level_2,
  },
  backdrop: {
    width: "100%",
    height: "100%",
  },
});
