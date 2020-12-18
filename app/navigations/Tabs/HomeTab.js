import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/HomeScreen/Home';
import { COLORS } from '../../constant/colors';
import { FontAwesome } from '@expo/vector-icons';
import Profile from '../../screens/HomeScreen/Profile';

function HomeTab({ navigations }) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator backBehavior='none'
            tabBarOptions={{
                activeTintColor: COLORS.thirdColor,
                activeBackgroundColor: 'white',
                inactiveTintColor: COLORS.inActiveColor,
                inactiveBackgroundColor: 'white',
                labelPosition: 'below-icon',
            }}
        >
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ color }) => (<FontAwesome name='home' size={24} color={color} />)
            }} />
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ color }) => (<FontAwesome name='user' size={24} color={color} />),
                tabBarVisible: 'true',
                title: 'Profile',
            }} />
        </Tab.Navigator>
    );
}

export default HomeTab;