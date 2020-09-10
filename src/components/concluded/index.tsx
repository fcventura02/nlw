import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from '../../assets/images/Background-concluded.png';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

interface ConcludedProps {
    page: string,
    title: string,
    subTitle: string,
}

const Concluded: React.FC<ConcludedProps> = ({ page, title, subTitle }) => {
    const { navigate } = useNavigation();

    const nextPage = () => {
        navigate(page)
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode='contain'
                source={giveClassesBgImage}
                style={styles.content}
            >

                <View>
                    <AntDesign name="checksquareo" size={80} color="#04D361" />
                </View>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subtitle}>
                    {subTitle}
                </Text>
            </ImageBackground>
            <RectButton
                onPress={() => nextPage()}
                style={[styles.buttom, { marginRight: 10 }]}
            >
                <Text style={styles.textButtom}>
                    Fazer Login
                </Text>
            </RectButton>
        </View>
    )
}

export default Concluded;