import { StyleSheet, View } from "react-native";

import { useGetMovies } from "@/hooks/useGetMovies";
import { useState } from "react";
import { theme } from "@/constants/Colors";
import { ThemedText } from "@/components/Common/ThemedText";
import { sizes } from "@/constants/metrics";
import { MoviesGrid } from "@/components/Home/MoviesGrid";
import { GenresTabs } from "@/components/Home/GenresTabs";
import { useCurrentTab } from "@/hooks/useCurrenTab";

export default function HomeScreen() {
  const { isLoading, hasMovies, moviesByGenre, isRefetching, refetch } =
    useGetMovies();
  const { currentTab, handleCurrentTab } = useCurrentTab();

  const currentMovies = moviesByGenre[currentTab];

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        Movies
      </ThemedText>
      {!isLoading && hasMovies && (
        <>
          <GenresTabs currentTab={currentTab} onPress={handleCurrentTab} />
          <MoviesGrid
            movies={currentMovies}
            refreshing={isRefetching}
            onRefresh={refetch}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: "100%",
    backgroundColor: theme.colors.gray,
    flex: 1,
  },
  title: {
    textAlign: "center",
    paddingTop: sizes.level_3,
  },
});
