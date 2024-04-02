import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

export const ProfileScreen = () => {

  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{ fontSize: 30, color: theme.colors.primary }}>
        Profile Screen
      </Text>
    </View>
  )
}
