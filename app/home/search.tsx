import { StyleSheet, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { useGetMoviesQuery } from "@/hooks/useGetMoviesQuery";
import { MoviesGrid } from "@/components/Home/MoviesGrid";
import { SearchBar } from "@/components/Search/SearchBar";
import { useGetMovies } from "@/hooks/useGetMovies";
import { images } from "@/constants/images";
import { MasonryFlashList } from "@shopify/flash-list";
import { GenreCard } from "@/components/Search/GenreCard";

export default function SearchScreen() {
  const { genres } = useGetMovies();
  const { moviesByQuery, handleQuery, isLoading, stateQuery } =
    useGetMoviesQuery();

  const combinedArray = images.map((image, index) => {
    return {
      image,
      genre: genres[index],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <SearchBar stateQuery={stateQuery} handleQuery={handleQuery} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {!isLoading && <MoviesGrid movies={moviesByQuery} />}
          <MasonryFlashList
            data={combinedArray}
            numColumns={2}
            renderItem={({ item }) => <GenreCard {...item} />}
            estimatedItemSize={200}
            keyExtractor={(item) => item.genre}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { minHeight: 3, width: "100%", flex: 1 },
});
