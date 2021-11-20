import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { theme } from '../global/styles/theme';

export type RootStackParamList = {
    Home: undefined;
    SignIn: undefined;
  };
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
    return(
        <Navigator
        screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: theme.colors.secondary100,
            }
            }}
        >
            <Screen
                name='SignIn'
                component={SignIn}
            />

            <Screen
                name='Home'
                component={Home}
            />
        </Navigator>
    )
}
