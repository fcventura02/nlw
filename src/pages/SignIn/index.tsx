import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

import styles from './styles';

const SigIn: React.FC = () => {
    const { navigate } = useNavigation();
    const { signed, signIn } = useContext(AuthContext);
    console.log(signed)
    async function handleSigIn() {
        signIn()
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title='loguin' onPress={handleSigIn}>Login</Button>
        </View>
    )
}
export default SigIn;