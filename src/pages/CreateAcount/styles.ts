import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: '#E5E5E5'
    },
    titleContainer: {
        marginTop: 140
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264d',
        fontSize: 32,
        lineHeight: 41
    },
    subtitle: {
        fontFamily: 'Poppins_400Regular',
        maxWidth: 200,
        fontSize: 14,
        lineHeight: 24,
        color: "#6a6180"
    },
    inputContainer: {
        paddingTop: 100,
        justifyContent: 'center',
    },
});
export default styles;