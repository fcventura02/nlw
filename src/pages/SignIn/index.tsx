import React, { useState } from 'react';
import { View, Text, CheckBox, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { TouchableWithoutFeedback, RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/images/Proffylogo.png';
import backgraundSignIn from '../../assets/images/Background-signIn.png';

import styles from './styles';
import OnboardingHeader from '../../components/OnboardHeader';
import InputSignIn from '../../components/InputSignIn';

const SigIn: React.FC = () => {
    const { navigate } = useNavigation();

    const [isSelected, setSelection] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    function handleNavigateToCreateAcount() {
        navigate('CreateAcount');
    }
    function handleNavigateToRecoverPassword() {
        navigate('RecoverPassword');
    }

    function handleSignIn() {
        signIn(email, password, isSelected)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "height" : "position"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.banner}>
                    <OnboardingHeader
                        backgraund={backgraundSignIn}
                        color={'#8257e5'}
                        image={logo}
                        message='Sua plaforma de estudos online.'
                    />
                </View>
                <View style={styles.contain}>
                    <InputSignIn
                        title='Fazer login'
                        placeholder={{ input1: 'email', input2: 'password' }}
                        setInput1={setEmail}
                        setInput2={setPassword}
                        getInput1={email}
                        getInput2={password}
                        buttom={{
                            onpress: handleSignIn,
                            title: 'Entrar',
                            color: '#04D361'
                        }}
                        subTitle={() => (
                            <RectButton onPress={handleNavigateToCreateAcount}>
                                <Text style={[styles.text, { color: '#8257E5' }]}>Criar uma conta</Text>
                            </RectButton>
                        )}
                    >
                        <View style={styles.header}>
                            <View style={styles.chekbox_container}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                    onTouchEndCapture={() => setSelection(!isSelected)}
                                />
                                <Text style={styles.text}>Lembrar-me</Text>
                            </View>
                            <RectButton onPress={handleNavigateToRecoverPassword}>
                                <Text style={styles.text}>Esqueci minha senha</Text>
                            </RectButton>
                        </View>

                    </InputSignIn>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}
export default SigIn;