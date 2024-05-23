import { MasonryFlashList } from "@shopify/flash-list";
import { GenreCard } from "../Search/GenreCard";
import { images } from "@/constants/images";
import { MoviesByGenre } from "@/types/movie";
import { StyleSheet } from "react-native";
import { sizes } from "@/constants/metrics";

export const GenresGrid = ({ genres }: { genres: MoviesByGenre["genres"] }) => {
  const combinedArray = images.map((image, index) => {
    return {
      image,
      genre: genres[index],
    };
  });
  return (
    <MasonryFlashList
      data={combinedArray}
      numColumns={2}
      renderItem={({ item }) => <GenreCard {...item} />}
      estimatedItemSize={200}
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
