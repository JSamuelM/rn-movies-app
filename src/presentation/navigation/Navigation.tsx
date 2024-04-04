import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../screens/details/DetailsScreen';
import { MaterialBottomTabs } from './MaterialBottomTabs';
import { useTheme } from 'react-native-paper';
import { DiscoverByGenreScreen } from '../screens/discover/DiscoverByGenreScreen';
import type { Genre } from '../../infrastructure/interfaces/movie-db.responses';

export type RootStackParams = {
  Root: undefined;
  Home: undefined;
  Details: { movieId: number };
  DiscoverByGenre: { genre: Genre };
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {

  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
          elevation: 0,
        },
        headerTintColor: theme.colors.primary,
      }}
    >
      <Stack.Screen
        name="Root" component={ MaterialBottomTabs }
        options={{
          title: 'The MovieDB',
          headerStyle: {
            backgroundColor: theme.colors.background,
            elevation: 0
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Details"
        component={ DetailsScreen }
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DiscoverByGenre"
        component={ DiscoverByGenreScreen }
        options={({ route }) => ({ title: route.params.genre.name })}
      />
      
    </Stack.Navigator>
  );
}
