import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/Home/HomeScreen'

import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import SkillScreen from '../screens/Skill/SkillScreen'



const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen
        name='home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name='home'
              color={color}
              size={size}
            />
          )
        }}
      />

      <Screen
        name='skill'
        component={SkillScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="medal-outline" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  )
}