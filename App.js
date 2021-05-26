import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Feather } from '@expo/vector-icons';

import HomeScreen from './src/screen/Home';
import FilterScreen from './src/screen/Filter';
import MeScreen from './src/screen/Me';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconSize = 24;
              let iconColor = 'gray';

              const setActiveIcon = () => {
                iconSize = focused ? 28 : 24;
                iconColor = focused ? 'black' : 'gray';
              }

              if (route.name === 'Home') {
                iconName = "home";
                setActiveIcon();
              } else if (route.name === 'Filter') {
                iconName = "search"
                setActiveIcon();
              } else if (route.name === 'Me') {
                iconName = "user"
                setActiveIcon();
              } else {
                iconName = "home"
              }

              return <Feather name={iconName} size={iconSize} color={iconColor} />;
            },
          })}

          tabBarOptions={{
            showLabel: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            name="Filter"
            component={FilterScreen}
          />
          <Tab.Screen
            name="Me"
            component={MeScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

