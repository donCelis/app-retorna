import { Movie, MoviesByGenre } from "@/types/movie";

export const groupMoviesByGenre = (movies: Movie[]): MoviesByGenre => {
  const genres = [...new Set(movies?.flatMap((movie) => movie.genres))];
  const grouped: MoviesByGenre["grouped"] = {};

  genres.forEach((genre) => {
    grouped[genre] = movies.filter((movie) => movie.genres.includes(genre));
  });

  return { grouped, genres };
};
