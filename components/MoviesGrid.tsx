import {
  ANIMATION_IMAGE_DEFAULT,
  HEIGHT_IMAGE_CARD,
  sizes,
} from "@/constants/metrics";
import { useGetMovies } from "@/hooks/useGetMovies";
import { MasonryFlashList } from "@shopify/flash-list";
import { MovieCard } from "./MovieCard";
import { Movie } from "@/types/movie";
import { ThemedText } from "./ThemedText";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { hp } from "@/utils/dimensions";
import { theme } from "@/constants/Colors";

type Props = {
  movies: Movie[];
};

export const MoviesGrid = ({ movies }: Props) => {
  return (
    <MasonryFlashList
      numColumns={2}
      data={movies}
      renderItem={({ item }) => <MovieCard {...item} />}
      estimatedItemSize={HEIGHT_IMAGE_CARD}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={() => (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <>
            <Image
              style={{ width: "100%", height: hp(45) }}
              source={require("@/assets/images/search.svg")}
              contentFit="contain"
              transition={ANIMATION_IMAGE_DEFAULT}
            />
            <ThemedText
              type="subtitle"
              style={{
                marginTop: sizes.level_3,
                color: theme.colors.neutral(0.8),
              }}
            >
              Enjoys watching movies.
            </ThemedText>
          </>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: sizes.level_2,
    paddingTop: 0,
  },
});
