import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';

import landingImg from '../../assets/images/landing.png';
import studygImg from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

function Landing() {
    const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);
    const { signOut } = useAuth();

    function handleSignOut() {
        signOut()
    }

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data
            setTotalConnections(total);
        })
    }, [])


    function handleNavigateToClassesPage() {
        navigate('GiveClasses');
    }
    function handleNavigateToStudyPage() {
        navigate('StudyTabs');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImg} />
            <Text style={styles.title}>
                Seja Bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToStudyPage} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studygImg} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavigateToClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
            <Button title='Sign Out' onPress={handleSignOut}>
                <Text>Exit</Text>
                <Image source={heartIcon} />
            </Button>
        </View>
    );
}

export default Landing;