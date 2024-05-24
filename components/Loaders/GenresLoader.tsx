import { generateArray } from "@/scripts";
import { MasonryFlashList } from "@shopify/flash-list";
import { ThemedView } from "../Common/ThemedView";
import { HEIGHT_IMAGE_CARD, sizes } from "@/constants/metrics";
import { theme } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

export const GenresLoader = () => {
  const genresLoader = generateArray(14, "genres");
  return (
    <MasonryFlashList
      data={genresLoader}
      numColumns={2}
      renderItem={({ item }) => (
        <ThemedView style={styles.container}>
          <View style={styles.cover} />
        </ThemedView>
      )}
      estimatedItemSize={HEIGHT_IMAGE_CARD / 2.5}
      keyExtractor={(item) => item}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: sizes.level_2, paddingTop: 0 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizes.level_3,
  },
  cover: {
    width: "100%",
    height: HEIGHT_IMAGE_CARD / 2.5,
    backgroundColor: theme.colors.grayBG,
    borderRadius: sizes.level_2,
  },
});
