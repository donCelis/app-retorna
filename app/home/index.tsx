import { StyleSheet, View, useColorScheme } from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { useGetMovies } from "@/hooks/useGetMovies";
import { GenresTabs } from "@/components/GenresTabs";
import { useState } from "react";
import { MoviesGrid } from "@/components/MoviesGrid";

export default function HomeScreen() {
  const { movieId } = useLocalSearchParams<{ movieId: string }>();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const { isLoading, hasMovies } = useGetMovies();
  const [currentTab, setCurrentTab] = useState("Action");

  const handleCurrentTab = (genre: string) => {
    setCurrentTab(genre);
  };

  return (
    <View style={{ flex: 1 }}>
      {!isLoading && hasMovies && (
        <GenresTabs currentTab={currentTab} onPress={handleCurrentTab} />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {!isLoading && hasMovies && <MoviesGrid currentTab={currentTab} />}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: "100%",
  },
});
