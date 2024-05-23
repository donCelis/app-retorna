import { HEIGHT_IMAGE_CARD, sizes } from "@/constants/metrics";
import { MasonryFlashList } from "@shopify/flash-list";
import { Movie } from "@/types/movie";
import { ThemedText } from "../Common/ThemedText";
import { StyleSheet } from "react-native";
import { theme } from "@/constants/Colors";
import { MovieCard } from "./MovieCard";
import { RefreshControl } from "react-native-gesture-handler";

type Props = {
  movies: Movie[];
  refreshing?: boolean;
  onRefresh?: () => void;
};

export const MoviesGrid = ({ movies, refreshing, onRefresh }: Props) => {
  return (
    <MasonryFlashList
      numColumns={2}
      refreshControl={
        <RefreshControl
          refreshing={refreshing ?? false}
          tintColor={theme.colors.neutral(0.8)}
          onRefresh={onRefresh && onRefresh}
        />
      }
      showsVerticalScrollIndicator={false}
      data={movies}
      renderItem={({ item }) => <MovieCard {...item} />}
      estimatedItemSize={HEIGHT_IMAGE_CARD}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={() => (
        <ThemedText
          type="subtitle"
          style={{
            color: theme.colors.neutral(0.8),
            textAlign: "center",
          }}
        >
          Enjoys watching movies.
        </ThemedText>
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
