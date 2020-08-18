import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../contexts/auth';

import styles from './styles';

const SigIn: React.FC = () => {
    const { signIn } = useAuth();

    function handleSignIn() {
        signIn()
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title='loguin' onPress={handleSignIn}>Login</Button>
        </View>
    )
}
export default SigIn;