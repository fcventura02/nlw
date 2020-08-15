import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import giveClassesBgImage from '../../assets/images/Backgroundonboarding-bg.png';
import onboardingSecondImage from '../../assets/images/Background-onboarding-second.png';

import styles from './styles';


interface PageHeaderProps {
    message: string,
    number: number,
}

const OnboardingHeader: React.FC<PageHeaderProps> = ({ message, number }) => {

    return (
        <>

            <View style={[number === 1 ? styles.headerPrimary : styles.headersecondary, styles.header]}>
                <ImageBackground
                    resizeMode='contain'
                    source={number === 1 ? giveClassesBgImage : onboardingSecondImage}
                    style={styles.content}
                >
                    <Image style={styles.image} source={number === 1 ? studyIcon : giveClassesIcon} />
                </ImageBackground>
            </View>

            <View style={styles.contain}>
                <Text style={styles.subtitle}>
                    {`0${number}.`}
                </Text>
                <Text style={styles.text}>
                    {message}
                </Text>
            </View>
        </>
    )
}

export default OnboardingHeader;