export type Movie = {
  backdrop: string;
  cast: string[];
  classification: string;
  director: string | string[];
  genres: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
};

export type MoviesByGenre = {
  grouped: { [key: string]: Movie[] };
  genres: string[];
};

export type StarRating = {
  fullStars: number;
  halfStars: number;
  emptyStars: number;
};
