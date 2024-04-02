import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../../hooks/useMovies'
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';
import { Button, useTheme } from 'react-native-paper';

export const HomeScreen = () => {

  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        {/* Principal */}
        <PosterCarousel movies={ nowPlaying } />

        {/* Popular */}
        <HorizontalCarousel
          movies={ popular }
          title="Populares"
          loadNextPage={ popularNextPage }
        />

        {/* Top Rated */}
        <HorizontalCarousel movies={ topRated } title="Top rated" />

        {/* Upcoming */}
        <HorizontalCarousel movies={ upcoming } title="Upcoming" />
      </View>
    </ScrollView>
  )
}
