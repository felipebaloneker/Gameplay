import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { SignIn } from '../screens/SignIn';
import { theme } from '../global/styles/theme';
import { AppointmentCreate } from '../screens/AppointmentCreate';

export type RootStackParamList = {
    Home: undefined;
    SignIn: undefined;
    AppointmentDetails: undefined;
    AppointmentCreate: undefined;
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
            <Screen
                name='AppointmentCreate'
                component={AppointmentCreate}
            />
            <Screen
                name='AppointmentDetails'
                component={AppointmentDetails}
            />
        </Navigator>
    )
}
