import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthContext from '../contexts/auth';
import AuthRoutes from './auth.Route';
import AppStack from './AppStack';

const Routes: React.FC = () => {
    const { Navigator, Screen } = createStackNavigator();
    const { signed } = useContext(AuthContext);

    return signed ?
        <AppStack />
        :
        <AuthRoutes />

};

export default Routes;