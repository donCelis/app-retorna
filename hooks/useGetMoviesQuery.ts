import { getMoviesQuery } from "@/services/fetcher";
import { Movie } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetMoviesQuery = () => {
  const [stateQuery, setStateQuery] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["moviesByQuery", stateQuery],
    queryFn: () => getMoviesQuery(stateQuery),
    enabled: !!stateQuery,
  });

  const handleQuery = (query: string, callback?: () => void) => {
    setStateQuery(query);
    if (!callback) return;
    callback();
  };

  const moviesByQuery = (data?.movies ?? []) as Movie[];
  const hasMovies = !!data?.movies.length;

  return { moviesByQuery, isLoading, handleQuery, hasMovies, stateQuery };
};
