import { StyleSheet, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { useGetMovies } from "@/hooks/useGetMovies";
import { useState } from "react";
import { theme } from "@/constants/Colors";
import { ThemedText } from "@/components/Common/ThemedText";
import { sizes } from "@/constants/metrics";
import { MoviesGrid } from "@/components/Home/MoviesGrid";
import { GenresTabs } from "@/components/Home/GenresTabs";

export default function HomeScreen() {
  const { isLoading, hasMovies, moviesByGenre } = useGetMovies();
  const [currentTab, setCurrentTab] = useState("Action");

  const currentMovies = moviesByGenre[currentTab];

  const handleCurrentTab = (genre: string) => {
    setCurrentTab(genre);
  };

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        Movies
      </ThemedText>
      {!isLoading && hasMovies && (
        <GenresTabs currentTab={currentTab} onPress={handleCurrentTab} />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {!isLoading && hasMovies && <MoviesGrid movies={currentMovies} />}
      </ScrollView>
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
