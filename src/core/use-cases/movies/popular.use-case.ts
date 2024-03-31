import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { Movie } from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MoviesResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      }
    });

    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Popular');
  }
}
