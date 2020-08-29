import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

import styles from './styles';

interface TopHeaderProps {
    navigatePage: string
}

const TopHeader: React.FC<TopHeaderProps> = ({ navigatePage }) => {
    const { navigate } = useNavigation();

    function handleGoBak() {
        navigate(navigatePage)
    }

    return (
        <View style={styles.topBar}>
            <BorderlessButton onPress={handleGoBak}>
                <Image source={backIcon} resizeMode="contain" />
            </BorderlessButton>
            <Image source={logoImage} resizeMode="contain" />
        </View>
    )
}

export default TopHeader;