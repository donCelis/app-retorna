import { sizes } from "@/constants/metrics";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import { TabItem } from "../Common/TabItem";
import { MoviesByGenre } from "@/types/movie";

type Props = {
  onPress: (genre: string) => void;
  currentTab: string;
  genres: MoviesByGenre["genres"];
};

const Divider = () => <View style={{ width: sizes.level_2 }} />;

export const GenresTabs = ({ onPress, currentTab, genres }: Props) => {
  return (
    <FlashList
      horizontal
      data={genres}
      renderItem={({ item }) => (
        <TabItem item={item} isActive={currentTab === item} onPress={onPress} />
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
  listContainerStyle: {
    padding: sizes.level_2,
    paddingHorizontal: sizes.level_4,
  },
});
