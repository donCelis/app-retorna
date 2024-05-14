import { sizes } from "@/constants/metrics";
import { useGetMovies } from "@/hooks/useGetMovies";
import { FlashList } from "@shopify/flash-list";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

type Props = {
  onPress: (genre: string) => void;
  currentTab: string;
};

export const GenresTabs = ({ onPress, currentTab }: Props) => {
  const { genres } = useGetMovies();
  return (
    <FlashList
      horizontal
      data={genres}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onPress(item)}
          style={{
            backgroundColor: "white",
            borderRadius: sizes.level_3,
            borderCurve: "continuous",
            padding: sizes.level_2,
            paddingHorizontal: sizes.level_4,
          }}
        >
          <ThemedText
            style={{
              color: currentTab === item ? Colors.dark.primary : "black",
            }}
          >
            {item}
          </ThemedText>
        </Pressable>
      )}
      ItemSeparatorComponent={() => <View style={{ width: sizes.level_4 }} />}
      estimatedItemSize={100}
      contentContainerStyle={styles.listContainerStyle}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainerStyle: {
    paddingHorizontal: sizes.level_4,
  },
});
