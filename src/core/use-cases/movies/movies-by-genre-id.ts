import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { Movie } from '../../entities/movie.entity';

export const moviesByGenreIdUseCase = async (
  fetcher: HttpAdapter,
  genreId: number,
): Promise<Movie[]> => {
  try {
    const moviesByGenreId = await fetcher.get<MoviesResponse>(`movie`, {
      params: {
        with_genres: genreId
      }
    });
    
    return moviesByGenreId.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - By Genre');
  }
}