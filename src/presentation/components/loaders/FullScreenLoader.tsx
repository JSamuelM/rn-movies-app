import { View, ActivityIndicator } from 'react-native';
import { useTheme } from 'react-native-paper';

export const FullScreenLoader = () => {

  const theme = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <ActivityIndicator size='large' color={ theme.colors.onPrimary } />
    </View>
  )
}
