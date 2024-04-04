import { ScrollView, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, useTheme } from 'react-native-paper';
import { RootStackParams } from '../../navigation/Navigation';
import { MoviePoster } from '../../components/movies/MoviePoster';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';
import { useDiscover } from '../../hooks/useDiscover';

interface Props extends StackScreenProps<RootStackParams, 'DiscoverByGenre'>{};

export const DiscoverByGenreScreen = ({ route }: Props) => {

  const theme = useTheme();
  const { genre } = route.params;

  console.log(genre.id);  

  const { isLoading, moviesByGenre } = useDiscover(genre.id);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>      
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          moviesByGenre.map(movie => (
            <MoviePoster
              key={ movie.id }
              movie={ movie }
              width={ 197 }
              height={ 270 }
            />
          ))
        }
      </View>
    </ScrollView>
  )
}
