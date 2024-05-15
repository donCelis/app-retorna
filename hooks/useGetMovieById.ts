import { getMovieById } from "@/services/fetcher";
import { useQuery } from "@tanstack/react-query";

export const useGetMovieById = (id: string | undefined) => {
  const { data, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
  });

  const hasMovie = !!Object.keys(data?.movie ?? {}).length;

  return { movie: data?.movie ?? undefined, isLoading, hasMovie };
};
