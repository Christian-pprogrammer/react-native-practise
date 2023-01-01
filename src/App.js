import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenC from './ScreenC';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator()
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{header: ()=>null}}
      >
        <Stack.Screen 
          name='Screen_A' 
          component={ScreenA} 
          // options={{header: ()=>null}}
        />
        <Stack.Screen name='Screen_B' component={ScreenB} />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if(route.name === 'Screen_A') {
              iconName = 'autoprefixer'
              size = focused ? 25:20
              color = focused ? '#f0f':'#555'
            }else if(route.name === 'Screen_B') {
              iconName = 'btc'
              size = focused ? 25:20
              color = focused ? '#f0f':'#555'
            }else if(route.name === 'Screen_C') {
              iconName = 'copyright';
              size = focused ? 25:20;
              color = focused ? '#f0f':'#555'
            }
            return (
              <FontAwesome5 
                name={iconName}
                size={size}
                color={color}
              />
            )
          },
          tabBarActiveTintColor: '#f0f',
          tabBarInactiveTintColor: '#555',
          tabBarActiveBackgroundColor: '#fff',
          tabBarInactiveBackgroundColor: '#999',
          // tabBarShowLabel: false
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 15},
        })
      }
      >
        <Tab.Screen name='Screen_A' component={ScreenA} />
        <Tab.Screen name='Screen_B' component={ScreenB} />
        <Tab.Screen name='Screen_C' component={ScreenC} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: '#000'
  }
})

export default App