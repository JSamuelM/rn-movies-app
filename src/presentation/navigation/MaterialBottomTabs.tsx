import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createMaterialBottomTabNavigator();

export const MaterialBottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ HomeScreen }
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <IonIcon name="home" color={ color } />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ ProfileScreen }
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <IonIcon name="person-circle-outline" color={ color } size={ 25 } />
          )
        }}
      />
    </Tab.Navigator>
  )
}
