import 'react-native-gesture-handler';

import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './presentation/navigation/Navigation';
import { LightScheme } from './theme/light-theme';
import { DarkScheme } from './theme/dark-theme';

const lightTheme = {
  ...MD3LightTheme,
  colors: LightScheme
}

const darkTheme = {
  ...MD3DarkTheme,
  colors: DarkScheme
}

export const App = () => {

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={ theme }>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  )
}
