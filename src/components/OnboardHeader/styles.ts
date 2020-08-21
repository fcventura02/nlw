import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        justifyContent: 'center',
        alignItems:'center',
        height: 248,
        width: 248,
    },
    header: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 160,
        height: 46.75,
        resizeMode : 'contain',
    },
    text: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        maxWidth: 160,
        color: '#D4C2FF',
    },
});

export default styles;