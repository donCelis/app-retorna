import { generateArray } from "@/scripts";
import { MasonryFlashList } from "@shopify/flash-list";
import { ThemedView } from "../Common/ThemedView";
import { ThemedText } from "../Common/ThemedText";
import { StyleSheet, View } from "react-native";
import { HEIGHT_IMAGE_CARD, sizes } from "@/constants/metrics";
import { theme } from "@/constants/Colors";

export const MoviesLoader = () => {
  const genresLoader = generateArray(6, "movies");
  return (
    <MasonryFlashList
      numColumns={2}
      data={genresLoader}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <ThemedView style={styles.container}>
          <View style={styles.poster} />
          <ThemedText style={styles.titleMovie} numberOfLines={1}>
            {item}
          </ThemedText>
        </ThemedView>
      )}
      estimatedItemSize={HEIGHT_IMAGE_CARD}
      contentContainerStyle={styles.listContainer}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: sizes.level_2,
    paddingTop: 0,
  },
  container: { padding: sizes.level_3, gap: sizes.level_1 },
  poster: {
    height: HEIGHT_IMAGE_CARD,
    width: "100%",
    borderRadius: sizes.level_2,
    backgroundColor: theme.colors.grayBG,
    borderCurve: "continuous",
  },
  titleMovie: {
    color: "transparent",
    backgroundColor: theme.colors.grayBG,
    borderRadius: sizes.level_2,
    borderCurve: "circular",
  },
});
