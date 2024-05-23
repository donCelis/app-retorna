import { ThemedText } from "@/components/Common/ThemedText";
import { GenresGrid } from "@/components/Home/GenresGrid";
import { sizes } from "@/constants/metrics";
import { useGetMovies } from "@/hooks/useGetMovies";
import { StyleSheet, View } from "react-native";

export default function GenresScreen() {
  const { genres, isLoading } = useGetMovies("genres");
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        Genres
      </ThemedText>
      {!isLoading && <GenresGrid genres={genres} />}
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
