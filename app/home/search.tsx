import { StyleSheet, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { useGetMoviesQuery } from "@/hooks/useGetMoviesQuery";
import { MoviesGrid } from "@/components/Home/MoviesGrid";
import { SearchBar } from "@/components/Search/SearchBar";

export default function SearchScreen() {
  const { moviesByQuery, handleQuery, isLoading, stateQuery } =
    useGetMoviesQuery();

  return (
    <View style={{ flex: 1 }}>
      <SearchBar stateQuery={stateQuery} handleQuery={handleQuery} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <MoviesGrid isLoading={isLoading} movies={moviesByQuery} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: "100%",
    flex: 1,
  },
});
