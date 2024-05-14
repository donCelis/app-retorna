import { Movie } from "@/types/movie";
import axios from "@/utils/axios";
import { AxiosError } from "axios";

type GetMovies = {
  success: boolean;
  movies: Movie[];
  msg?: string;
};

export const getMovies = async (): Promise<GetMovies> => {
  try {
    const res = await axios.get("/movies");
    const { data } = res;
    return { success: true, movies: data.movies as Movie[] };
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log("got error: ", axiosError.message);
    return { success: false, movies: [], msg: axiosError.message };
  }
};

type GetMovie = {
  success: boolean;
  movie: Movie | undefined;
  msg?: string;
};

export const getMovieById = async (id: string | undefined): Promise<GetMovie> => {
  try {
    const res = await axios.get(`/movies/${id ?? ""}`);
    const { data } = res;
    return { success: true, movie: data as GetMovie["movie"] };
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log("got error: ", axiosError.message);
    return {
      success: false,
      movie: {} as GetMovie["movie"],
      msg: axiosError.message,
    };
  }
};
