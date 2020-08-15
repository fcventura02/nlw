import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        justifyContent: 'center',
        alignItems:'center',
        height: 248,
        width: 234,
    },
    header: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerPrimary:{
        backgroundColor: '#8257e5',
    },
    headersecondary:{
        backgroundColor: '#04D361',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode : 'contain',
    },
    contain: {
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        justifyContent: 'space-around',
    },
    subtitle: {
        color: '#6a6180',
        opacity: 0.16,
        fontFamily: 'Archivo_400Regular',
        fontSize: 40,
        lineHeight: 44,
    },
    text: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 206,
        marginVertical: 40,
        color: '#6a6180',
    },
});

export default styles;