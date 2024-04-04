import { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-cases';
import { discoverDBFetcher } from '../../config/adapters/movieDB.adapter';
import type { Movie } from '../../core/entities/movie.entity';

export const useDiscover = (genreId: number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [moviesByGenre, setMoviesByGenre] = useState<Movie[]>([]);

  useEffect(() => {
    loadMoviesByGenre()
  }, [genreId])

  const loadMoviesByGenre = async () => {
    setIsLoading(true);
    const movies = await UseCases.moviesByGenreIdUseCase(discoverDBFetcher, genreId);
    console.log({ movies });
    
    setMoviesByGenre(movies);
    setIsLoading(false);
  }
  

  return {
    isLoading,
    moviesByGenre

    // Methods
  }
}
