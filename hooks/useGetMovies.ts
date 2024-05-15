import { groupMoviesByGenre } from "@/scripts";
import { getMovies } from "@/services/fetcher";
import { Movie } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";

export const useGetMovies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const movies = (data?.movies ?? []) as Movie[];
  const hasMovies = !!data?.movies?.length;
  const { grouped: moviesByGenre, genres } = groupMoviesByGenre(movies);

  return { isLoading, hasMovies, moviesByGenre, genres };
};
