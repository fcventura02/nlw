import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../pages/Onboarding';
import SignIn from '../pages/SignIn';

const AuthRoutes = () => {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Onboarding' component={Onboarding} />
            <Screen name='SignIn' component={SignIn} />
        </Navigator>
    )
}

export default AuthRoutes