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
});

export default styles;