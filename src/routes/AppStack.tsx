import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Landing' component={Landing} />
                <Screen name='GiveClasses' component={GiveClasses} />
                <Screen name='StudyTabs' component={StudyTabs} />
            </Navigator>
    );
}

export default AppStack;