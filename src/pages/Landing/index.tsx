import React from 'react';
import { View, Text, Image } from 'react-native';

import landingImg from '../../assets/images/landing.png'

import styles from './styles';

function Landing() {
    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImg} />
            <Text></Text>
        </View>
    );
}

export default Landing;