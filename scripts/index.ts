import { START_TOTAL } from "@/constants/metrics";
import { Movie, MoviesByGenre, StarRating } from "@/types/movie";

export const groupMoviesByGenre = (movies: Movie[]): MoviesByGenre => {
  const genres = [...new Set(movies?.flatMap((movie) => movie.genres))];
  const grouped: MoviesByGenre["grouped"] = {};

  genres.forEach((genre) => {
    grouped[genre] = movies.filter((movie) => movie.genres.includes(genre));
  });

  return { grouped, genres };
};

export function calculateStars(rating: number): StarRating {
  const starsRating = rating / 2;
  const fullStars = Math.floor(starsRating);
  const halfStars = starsRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = START_TOTAL - fullStars - halfStars;

  return {
    fullStars,
    halfStars,
    emptyStars,
  };
}

export const stringToArray = (input: string | string[]): string[] => {
  return typeof input === "string" ? [input] : input;
};
