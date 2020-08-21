import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        height: '46%',
        width: '100%'
    },
    contain: {
        padding: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingBottom: 20,
    },
    text: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 24,
        color: '#9C98A6',
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        lineHeight: 34,
        color: '#32264D',
    },
    input_container: {
        paddingBottom: 20
    },
    input_item: {
        justifyContent: 'center',
        backgroundColor: '#fafafc',
        marginBottom: 3,
        height: 54,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    input_item_bottom: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '89%',
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 24,
        justifyContent: "center",
        paddingLeft: 8,
    },
    input_Focus: {
        borderLeftWidth: 1,
        borderLeftColor:'#543210'
    },
    

    chekbox_container: {
        flexDirection: 'row',
        alignItems: "center",
    },
    checkbox: {
        borderColor: '#E6E6F0',
        borderWidth: 1,
    },

    button: {
        backgroundColor: '#04D361',
        height: 58,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: 'center',
    },

    text_button: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
        lineHeight: 26,
        color: '#fff',
    },
});

export default styles