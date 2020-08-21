import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import OnboardingHeader from '../../components/OnboardHeader';

import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import giveClassesBgImage from '../../assets/images/Backgroundonboarding-bg.png';
import onboardingSecondImage from '../../assets/images/Background-onboarding-second.png';


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
                    <>
                        <OnboardingHeader
                            backgraund={giveClassesBgImage}
                            color={'#8257e5'}
                            image={studyIcon}
                        />

                        <View style={styles.contain}>
                            <Text style={styles.subtitle}>
                                01.
                            </Text>
                            <Text style={styles.text}>
                                Encontre vários professores para ensinar você.
                            </Text>
                        </View>
                    </>
                    :
                    <>
                        <OnboardingHeader
                            backgraund={onboardingSecondImage}
                            color={'#04D361'}
                            image={giveClassesIcon}
                        />
                        <View style={styles.contain}>
                            <Text style={styles.subtitle}>
                                02.
                            </Text>
                            <Text style={styles.text}>
                                Encontre vários professores para ensinar você.
                            </Text>
                        </View>
                    </>

            }
            <View style={[styles.footer]}>
                <View style={styles.pages}>
                    <View style={[styles.page, pageOnboarding === 1 && styles.select]} />
                    <View style={[styles.page, pageOnboarding === 2 && styles.select]} />
                </View>
                <BorderlessButton onPress={handleNavigateToClassesPage}>
                    <Ionicons name="ios-arrow-round-forward" size={50} color="#9C98A6" />
                </BorderlessButton>
            </View>
        </>
    )
}

export default Onboarding;