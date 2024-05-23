import { theme } from "@/constants/Colors";
import { sizes } from "@/constants/metrics";
import { Ionicons } from "@expo/vector-icons";
import { debounce } from "lodash";
import { useRef } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

type Props = {
  stateQuery: string;
  handleQuery: (query: string, callback?: () => void) => void;
};

export const SearchBar = ({ stateQuery, handleQuery }: Props) => {
  const searchInputRef = useRef<TextInput>(null);
  const handleTextDebounce = debounce(handleQuery, 500);

  return (
    <View style={styles.searchBar}>
      <View style={styles.searchIcon}>
        <Ionicons name="search" size={24} color={theme.colors.neutral(0.4)} />
      </View>
      <TextInput
        placeholder="Search movies..."
        ref={searchInputRef}
        onChangeText={handleTextDebounce}
        style={styles.searchInput}
        placeholderTextColor={theme.colors.black}
      />
      {stateQuery && (
        <Pressable
          onPress={() => handleQuery("", () => searchInputRef.current?.clear())}
          style={styles.closeIcon}
        >
          <Ionicons name="close" size={24} color={theme.colors.neutral(0.6)} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: sizes.level_2,
    margin: sizes.level_3,
    marginHorizontal: sizes.level_4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    backgroundColor: theme.colors.white,
    paddingLeft: sizes.level_2,
    borderRadius: sizes.level_4,
  },
  searchIcon: {
    padding: sizes.level_2,
  },
  searchInput: {
    flex: 1,
    borderRadius: sizes.level_3,
    fontSize: sizes.level_4,
  },
  closeIcon: {
    backgroundColor: theme.colors.neutral(0.1),
    padding: sizes.level_2,
    borderRadius: sizes.level_3,
  },
});
