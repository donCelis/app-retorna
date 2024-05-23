import { AreaView } from "@/components/Common/AreaView";
import { GoBack } from "@/components/Common/GoBack";
import { ThemedText } from "@/components/Common/ThemedText";
import { MoviesGrid } from "@/components/Home/MoviesGrid";
import { sizes } from "@/constants/metrics";
import { useGetMovies } from "@/hooks/useGetMovies";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function GenreScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const { moviesByGenre, isLoading, hasMovies, isRefetching, refetch } =
    useGetMovies("genres");
  const currentMovies = moviesByGenre[name ?? "Action"];

  return (
    <AreaView>
      <View style={{ position: "relative" }}>
        <GoBack style={styles.back} />
        <ThemedText type="subtitle" style={styles.title}>
          {name}
        </ThemedText>
      </View>
      {!isLoading && hasMovies && (
        <MoviesGrid
          movies={currentMovies}
          refreshing={isRefetching}
          onRefresh={refetch}
        />
      )}
    </AreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    paddingVertical: sizes.level_3,
  },
  back: {
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: sizes.level_4,
    marginTop: sizes.level_1,
  },
});
