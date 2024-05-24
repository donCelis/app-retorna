import { AreaView } from "@/components/Common/AreaView";
import { Loader } from "@/components/Loaders/Loader";
import { MovieById } from "@/components/MovieById/MovieById";
import { useGetMovieById } from "@/hooks/useGetMovieById";
import { useLocalSearchParams } from "expo-router";

export default function MovieScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const { movie, isLoading } = useGetMovieById({ slug });

  return (
    <AreaView>{isLoading ? <Loader /> : <MovieById movie={movie} />}</AreaView>
  );
}
