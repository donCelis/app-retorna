import { HEIGHT_IMAGE_CARD } from "@/constants/metrics";
import { useGetMovies } from "@/hooks/useGetMovies";
import { MasonryFlashList } from "@shopify/flash-list";
import { MovieCard } from "./MovieCard";

type Props = {
  currentTab: string;
};

export const MoviesGrid = ({ currentTab }: Props) => {
  const { moviesByGenre } = useGetMovies();
  return (
    <MasonryFlashList
      numColumns={2}
      data={moviesByGenre[currentTab]}
      renderItem={({ item }) => <MovieCard {...item} />}
      estimatedItemSize={HEIGHT_IMAGE_CARD}
      keyExtractor={(item) => item.id}
    />
  );
};
