import { AreaView } from "@/components/Common/AreaView";
import { MovieById } from "@/components/MovieById/MovieById";
import { useGetMovieById } from "@/hooks/useGetMovieById";
import { useLocalSearchParams } from "expo-router";

export default function MovieScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const { movie, isLoading, hasMovie } = useGetMovieById({ slug });

  return (
    <AreaView>{!isLoading && hasMovie && <MovieById movie={movie} />}</AreaView>
  );
}
