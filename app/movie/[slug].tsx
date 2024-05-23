import { MovieById } from "@/components/MovieById/MovieById";
import { theme } from "@/constants/Colors";
import { useGetMovieById } from "@/hooks/useGetMovieById";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const { movie, isLoading, hasMovie } = useGetMovieById({ slug });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.gray }}>
      {!isLoading && hasMovie && <MovieById movie={movie} />}
    </SafeAreaView>
  );
}
