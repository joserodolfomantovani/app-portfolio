import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/Home/HomeScreen'

import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import { SkillScreen } from '../screens/Skill/SkillScreen'



const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen
        name='home'
        component={HomeScreen}
        options={{
          title: 'Main',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name='home'
              color='red'
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
            <MaterialCommunityIcons name="view-gallery" size={24} color="blue" />
          )
        }}
      />
    </Navigator>
  )
}