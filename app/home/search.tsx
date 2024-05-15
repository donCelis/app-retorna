import { StyleSheet, Platform, View, Pressable } from "react-native";
import { debounce } from "lodash";

import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Image } from "expo-image";
import { useGetMoviesQuery } from "@/hooks/useGetMoviesQuery";
import { useCallback, useRef } from "react";
import { ANIMATION_IMAGE_DEFAULT, sizes } from "@/constants/metrics";
import { MoviesGrid } from "@/components/MoviesGrid";
import { theme } from "@/constants/Colors";
import { hp, wp } from "@/utils/dimensions";
import { Ionicons } from "@expo/vector-icons";

export default function SearchScreen() {
  const searchInputRef = useRef<TextInput>(null);
  const { moviesByQuery, handleQuery, isLoading, stateQuery } =
    useGetMoviesQuery();

  const handleTextDebounce = useCallback(debounce(handleQuery, 500), []);

  return (
    <View style={{ flex: 1 }}>
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
            onPress={() =>
              handleQuery("", () => searchInputRef.current?.clear())
            }
            style={styles.closeIcon}
          >
            <Ionicons
              name="close"
              size={24}
              color={theme.colors.neutral(0.6)}
            />
          </Pressable>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>{!isLoading && <MoviesGrid movies={moviesByQuery} />}</View>
      </ScrollView>
    </View>
  );
}

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
