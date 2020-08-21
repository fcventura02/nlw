import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../pages/Onboarding';
import SignIn from '../pages/SignIn';
import CreateAcount from '../pages/CreateAcount';
import RecoverPassword from '../pages/RecoverPassword';

const AuthRoutes = () => {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Onboarding' component={Onboarding} />
            <Screen name='SignIn' component={SignIn} />
            <Screen name='CreateAcount' component={CreateAcount} />
            <Screen name='RecoverPassword' component={RecoverPassword} />
        </Navigator>
    )
}

export default AuthRoutes