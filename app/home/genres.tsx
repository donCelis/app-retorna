import { ThemedText } from "@/components/Common/ThemedText";
import { GenresGrid } from "@/components/Home/GenresGrid";
import { sizes } from "@/constants/metrics";
import { useGetMovies } from "@/hooks/useGetMovies";
import { StyleSheet, View } from "react-native";

export default function GenresScreen() {
  const { genres, isRefetching, refetch, loader } = useGetMovies("genres");
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        Genres
      </ThemedText>
      <GenresGrid
        genres={genres}
        isLoading={loader}
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
