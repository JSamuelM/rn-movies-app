import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';
import { MaterialBottomTabs } from './MaterialBottomTabs';
import { useTheme } from 'react-native-paper';

export type RootStackParams = {
  Root: undefined;
  Home: undefined;
  Details: { movieId: number };
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
      
    </Stack.Navigator>
  );
}
