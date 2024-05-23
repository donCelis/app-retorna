import { getMovieById } from "@/services/fetcher";
import { useQuery } from "@tanstack/react-query";

export const useGetMovieById = ({ slug }: { slug?: string }) => {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ["movie", slug],
    queryFn: () => getMovieById(slug),
  });

  const hasMovie = !!Object.keys(data?.movie ?? {}).length;

  return {
    movie: data?.movie ?? undefined,
    isLoading,
    hasMovie,
    refetch,
    isRefetching,
  };
};
