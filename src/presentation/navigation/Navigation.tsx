import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';
import { MaterialBottomTabs } from './MaterialBottomTabs';

export type RootStackParams = {
  Root: undefined;
  Home: undefined;
  Details: { movieId: number };
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Root" component={ MaterialBottomTabs } />
      <Stack.Screen name="Details" component={ DetailsScreen } />
      
    </Stack.Navigator>
  );
}
