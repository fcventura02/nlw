import React from 'react';

import { useAuth } from '../contexts/auth';
import AuthRoutes from './auth.Route';
import AppStack from './AppStack';
import { View, ActivityIndicator } from 'react-native';

const Routes: React.FC = () => {
    const { signed, loading } = useAuth();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#555' />
            </View>
        )
    }
    return signed ?
        <AppStack />
        :
        <AuthRoutes />

};

export default Routes;