import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';
import { memo, useCallback, useEffect, useRef } from 'react';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

interface PropsMoviePoster {
  item: Movie;
}

export const HorizontalCarousel = ({ movies, title, loadNextPage }: Props) => {

  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);
  

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current && loadNextPage) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    
    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    // cargar las siguientes peliculas
    loadNextPage && loadNextPage();
  }

  const renderMoviePosterItem = useCallback(({ item }: PropsMoviePoster) => {
    return <MoviePoster movie={ item } width={ 140 } height={ 200 } />
  }, []);

  return (
    <View
      style={{
        height: title ? 260: 220
      }}
    >
      {
        title && (
          <Text
            style={{
              fontSize: 30,
              fontWeight: '300',
              marginLeft: 10,
              marginBottom: 10
            }}
          >{ title }</Text>
        )
      }

      <FlatList
        data={ movies }
        // renderItem={ ({ item }) => renderMoviePoster(item) }
        renderItem={ renderMoviePosterItem }
        keyExtractor={ (item, index) => (item.id.toString() + index) }
        horizontal
        showsHorizontalScrollIndicator={ false }
        onScroll={ onScroll }
      />
    </View>
  );
};
