import { HEIGHT_IMAGE_CARD, sizes } from "@/constants/metrics";
import { MasonryFlashList } from "@shopify/flash-list";
import { Movie } from "@/types/movie";
import { ThemedText } from "../Common/ThemedText";
import { StyleSheet } from "react-native";
import { theme } from "@/constants/Colors";
import { MovieCard } from "./MovieCard";
import { RefreshControl } from "react-native-gesture-handler";
import { MoviesLoader } from "../Loaders/MoviesLoader";

type Props = {
  movies: Movie[];
  refreshing?: boolean;
  onRefresh?: () => void;
  isLoading?: boolean;
};

export const MoviesGrid = ({
  movies,
  refreshing,
  onRefresh,
  isLoading = false,
}: Props) => {
  return isLoading ? (
    <MoviesLoader />
  ) : (
    <MasonryFlashList
      numColumns={2}
      refreshControl={
        <RefreshControl
          refreshing={refreshing ?? false}
          tintColor={theme.colors.neutral(0.8)}
          onRefresh={onRefresh}
        />
      }
      showsVerticalScrollIndicator={false}
      data={movies}
      renderItem={({ item }) => <MovieCard {...item} />}
      estimatedItemSize={HEIGHT_IMAGE_CARD}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={() => (
        <ThemedText type="subtitle" style={styles.title}>
          Enjoys watching movies
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
  title: {
    color: theme.colors.neutral(0.8),
    textAlign: "center",
  },
});
