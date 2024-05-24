import { StyleSheet, View } from "react-native";

import { useGetMovies } from "@/hooks/useGetMovies";
import { ThemedText } from "@/components/Common/ThemedText";
import { sizes } from "@/constants/metrics";
import { MoviesGrid } from "@/components/Home/MoviesGrid";
import { GenresTabs } from "@/components/Home/GenresTabs";
import { useCurrentTab } from "@/hooks/useCurrenTab";

export default function HomeScreen() {
  const { moviesByGenre, isRefetching, refetch, genres, loader } =
    useGetMovies("home");
  const { currentTab, handleCurrentTab } = useCurrentTab();

  const currentMovies = moviesByGenre[currentTab];

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        Movies
      </ThemedText>
      <GenresTabs
        genres={genres}
        currentTab={currentTab}
        onPress={handleCurrentTab}
        isLoading={loader}
      />
      <MoviesGrid
        isLoading={loader}
        movies={currentMovies}
        refreshing={isRefetching}
        onRefresh={refetch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minHeight: 3,
  },
  title: {
    textAlign: "center",
    paddingVertical: sizes.level_3,
  },
});
