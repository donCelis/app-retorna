import { generateArray } from "@/scripts";
import { FlashList } from "@shopify/flash-list";
import { ThemedView } from "../Common/ThemedView";
import { ThemedText } from "../Common/ThemedText";
import { theme } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { Divider } from "../Common/Divider";
import { sizes } from "@/constants/metrics";

export const TabsLoader = () => {
  const genresTabsLoader = generateArray(6, "tabs");
  return (
    <FlashList
      horizontal
      data={genresTabsLoader}
      renderItem={({ item }) => (
        <ThemedView style={styles.innerTab}>
          <ThemedText style={{ color: "transparent" }}>{item}</ThemedText>
        </ThemedView>
      )}
      ItemSeparatorComponent={Divider}
      estimatedItemSize={100}
      contentContainerStyle={styles.listContainerStyle}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  innerTab: {
    backgroundColor: theme.colors.grayBG,
    padding: sizes.level_2,
    paddingHorizontal: sizes.level_4,
    borderRadius: sizes.level_4,
    borderCurve: "continuous",
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
  },
  listContainerStyle: {
    padding: sizes.level_2,
    paddingHorizontal: sizes.level_4,
  },
});
