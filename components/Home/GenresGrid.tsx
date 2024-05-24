import { MasonryFlashList } from "@shopify/flash-list";
import { GenreCard } from "../Cards/GenreCard";
import { images } from "@/constants/images";
import { MoviesByGenre } from "@/types/movie";
import { StyleSheet } from "react-native";
import { HEIGHT_IMAGE_CARD, sizes } from "@/constants/metrics";
import { GenresLoader } from "../Loaders/GenresLoader";
import { RefreshControl } from "react-native-gesture-handler";
import { theme } from "@/constants/Colors";

export const GenresGrid = ({
  genres,
  refreshing,
  onRefresh,
  isLoading,
}: {
  genres: MoviesByGenre["genres"];
  refreshing?: boolean;
  onRefresh?: () => void;
  isLoading?: boolean;
}) => {
  const combinedArray = images.map((image, index) => {
    return {
      image,
      genre: genres[index],
    };
  });
  return isLoading ? (
    <GenresLoader />
  ) : (
    <MasonryFlashList
      data={combinedArray}
      numColumns={2}
      refreshControl={
        <RefreshControl
          refreshing={refreshing ?? false}
          tintColor={theme.colors.neutral(0.8)}
          onRefresh={onRefresh}
        />
      }
      renderItem={({ item }) => <GenreCard {...item} />}
      estimatedItemSize={HEIGHT_IMAGE_CARD / 2.5}
      keyExtractor={(item) => item.genre}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: sizes.level_2,
    paddingTop: 0,
  },
});
