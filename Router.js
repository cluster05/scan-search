import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './src/screen/Home';
import FilterScreen from './src/screen/Filter';
import MeScreen from './src/screen/Me';
import SearchScreen from './src/screen/Search';

const Tab = createBottomTabNavigator();

let iconName = "home";
let iconSize = 24;
let iconColor = 'gray';

const setActiveIcon = (focused) => {
    iconSize = focused ? 28 : 24;
    iconColor = focused ? 'black' : 'gray';
}

const tabsOptions = (focused, route) => {

    if (route.name === 'Home') {
        iconName = "comment-question-outline";
        setActiveIcon(focused);
        return <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
    } else if (route.name === 'Search') {
        iconName = "search"
        setActiveIcon(focused);
        return <Feather name={iconName} size={iconSize} color={iconColor} />;
    } else if (route.name === 'Filter') {
        iconName = "sliders"
        setActiveIcon(focused);
        return <Feather name={iconName} size={iconSize} color={iconColor} />;
    } else if (route.name === 'Me') {
        iconName = "user"
        setActiveIcon(focused);
        return <Feather name={iconName} size={iconSize} color={iconColor} />;
    }
}

const Router = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        return tabsOptions(focused, route)
                    },

                })}
                tabBarOptions={{ showLabel: false }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
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
    )
}

export default Router
