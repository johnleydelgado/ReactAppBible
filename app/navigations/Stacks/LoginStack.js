import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/LoginScreen/Login';
import HomeTab from '../Tabs/HomeTab';
function LoginStack(props) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='HomeTab' component={HomeTab} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default LoginStack;