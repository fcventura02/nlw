import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import styles from './styles';


interface PageHeaderProps {
    message?: string,
    color: string,
    image: any,
    backgraund: any,
}

const OnboardingHeader: React.FC<PageHeaderProps> = ({ message, color, image, backgraund }) => {

    return (
        <View style={[styles.container, styles.header,{backgroundColor:color}]}>
            <ImageBackground
                resizeMode='contain'
                source={backgraund}
                style={styles.content}
            >
                <Image style={styles.image} source={image} />
                {!!message && (
                    <Text style={styles.text}>
                        {message}
                    </Text>
                )}

            </ImageBackground>
        </View>
    )
}

export default OnboardingHeader;