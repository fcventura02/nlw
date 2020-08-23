import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264d',
        fontSize: 32,
        lineHeight: 41
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingBottom: 0,
    },
    inputContain: {
        backgroundColor: '#E5E5E5',
        paddingTop: 24,
    },
    inputItem: {
        borderColor: '#e6e6f0',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#fafafc',
        height: 64,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
    },
    button: {
        marginTop: 24,
        marginBottom: 34,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        borderRadius: 8,
        backgroundColor: '#DCDCE5',
    },
    buttonTitle: {
        color: '#9c98a6',
        fontFamily: 'Archivo_400Regular',
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 26,
    },
});
export default styles;