import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container} >
            <View style={styles.profile} >
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars1.githubusercontent.com/u/54460658?s=460&u=157daf379a18cc6c2135de8d353b442c5d880710&v=4' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Filipe Ventura</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Teste alowwwww
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>
                        R$ 20,00
                    </Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={heartOutlineIcon}/>
                        <Image source={unfavoriteIcon}/>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
};

export default TeacherItem;