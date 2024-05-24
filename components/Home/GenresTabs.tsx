import { sizes } from "@/constants/metrics";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet } from "react-native";
import { TabItem } from "../Common/TabItem";
import { MoviesByGenre } from "@/types/movie";
import { TabsLoader } from "../Loaders/TabsLoader";
import { Divider } from "../Common/Divider";

type Props = {
  onPress: (genre: string) => void;
  currentTab: string;
  genres: MoviesByGenre["genres"];
  isLoading?: boolean;
};

export const GenresTabs = ({
  onPress,
  currentTab,
  genres,
  isLoading,
}: Props) => {
  return isLoading ? (
    <TabsLoader />
  ) : (
    <FlashList
      horizontal
      data={genres}
      renderItem={({ item }) => (
        <TabItem item={item} isActive={currentTab === item} onPress={onPress} />
      )}
      ItemSeparatorComponent={Divider}
      estimatedItemSize={100}
      contentContainerStyle={stylesGenresTabs.listContainerStyle}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const stylesGenresTabs = StyleSheet.create({
  listContainerStyle: {
    padding: sizes.level_2,
    paddingHorizontal: sizes.level_4,
  },
});
