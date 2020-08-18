import React, { useState } from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import OnboardingHeader from '../../components/OnboardHeader';

import styles from './styles';

function Onboarding() {
    const [pageOnboarding, setPageOnboarding] = useState(1);
    const { navigate } = useNavigation();

    function handleNavigateToClassesPage() {
        if (pageOnboarding >= 2)
            return navigate('SignIn');

        setPageOnboarding(pageOnboarding + 1)
    }

    return (
        <>
            {
                pageOnboarding === 1 ?
                    <OnboardingHeader
                        message='Encontre vários professores para ensinar você.'
                        number={pageOnboarding}
                    />
                    :
                    <OnboardingHeader
                        message='Ou dê aulas sobre o que você mais conhece .'
                        number={pageOnboarding}
                    />

            }
            <View style={[styles.footer]}>
                <View style={styles.pages}>
                    <View style={[styles.page, pageOnboarding===1 && styles.select]} />
                    <View style={[styles.page, pageOnboarding===2 && styles.select]} />
                </View>
                <BorderlessButton onPress={handleNavigateToClassesPage}>
                    <Ionicons name="ios-arrow-round-forward" size={50} color="#9C98A6" />
                </BorderlessButton>
            </View>
        </>
    )
}

export default Onboarding;