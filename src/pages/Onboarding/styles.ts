import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pages: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    page: {
        width: 5,
        height: 5,
        margin: 2,
        backgroundColor: '#C1BCCC',
        borderRadius: 3
    },
    select: {
        backgroundColor: '#8257E5',
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