import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8257E5",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 42,
        marginBottom: 54,
        flex: 0.9,
    },
    title: {
        marginBottom: 8,
        marginTop: 34,
        textAlign: 'center',
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight: 41,
        paddingHorizontal: 70,
    },
    subtitle: {
        marginTop: 8,
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular',
        maxWidth: 200,
        fontSize: 14,
        lineHeight: 24,
        color: "#D4C2FF"
    },
    buttom: {
        backgroundColor: "#04D361",
        paddingVertical: 15,
        paddingHorizontal: 106,
        borderRadius: 8,
    },
    textButtom: {
        fontFamily: 'Archivo_400Regular',
        color: '#fff',
        fontSize: 16,
        lineHeight: 26

    }
})


export default styles;