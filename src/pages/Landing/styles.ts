import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        justifyContent: "center",
    },
    header: {
        backgroundColor: '#8257E5',
        paddingHorizontal: 40,
        paddingTop: 30,
    },
    headerContain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonOff: {
        backgroundColor: '#774DD6',
        borderRadius: 8,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    perfil: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePerfil: {
        borderRadius: 50,
        width: 62,
        height: 62,
        resizeMode: 'contain',
    },
    contain: {
        paddingHorizontal: 40,
        paddingBottom:40,
    },

    headerTitle: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 22,
        paddingLeft: 9
    },

    banner: {
        width: '100%',
        resizeMode: 'contain',
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 158,
        width: 147,
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04d361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
        lineHeight:22,
    },

    totalConnections: {
        fontFamily: 'Archivo_400Regular',
        color: '#9C98A6',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    }


});

export default styles;