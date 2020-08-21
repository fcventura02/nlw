import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, CheckBox, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { TouchableWithoutFeedback, RectButton, BaseButton } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/images/Proffylogo.png';
import backgraundSignIn from '../../assets/images/Background-signIn.png';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import OnboardingHeader from '../../components/OnboardHeader';

const SigIn: React.FC = () => {
    const { navigate } = useNavigation();

    const [isSelected, setSelection] = useState(false);
    const [isShowPassword, setShowPassword] = useState(true);
    const [isDesable, setDesable] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    function enabled() {
        if (email != '' && password.length > 0)
            return setDesable(true)
        return setDesable(false)
    };

    useEffect(() => {
        enabled()
    }, [email, password]);

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
                    <View style={styles.header}>
                        <Text style={styles.title}>Fazer login</Text>
                        <RectButton onPress={handleNavigateToCreateAcount}>
                            <Text style={[styles.text, { color: '#8257E5' }]}>Criar uma conta</Text>
                        </RectButton>
                    </View>


                    <View style={styles.input_container}>
                        <View style={styles.input_item}>
                            <TextInput
                                onChangeText={text => setEmail(text)}
                                value={email}
                                style={[styles.input, { width: '100%', }]}
                                textContentType='emailAddress'
                                placeholder="Email"

                            />
                        </View>
                        <View style={[styles.input_item, styles.input_item_bottom]}>
                            <TextInput
                                onChangeText={text => setPassword(text)}
                                value={password}
                                style={styles.input}
                                secureTextEntry={isShowPassword}
                                textContentType='password'
                                placeholder="Senha"
                            />
                            <RectButton
                                onPress={() => setShowPassword(!isShowPassword)}
                                style={{ marginRight: 10 }}
                            >
                                <Feather
                                    name={isShowPassword ? 'eye' : 'eye-off'}
                                    size={24}
                                    color={isShowPassword ? '#9C98A6' : '#8257E5'}
                                />
                            </RectButton>
                        </View>
                    </View>


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

                    <BaseButton
                        style={[styles.button, !isDesable && { backgroundColor: '#DCDCE5' }]}
                        onPress={handleSignIn}
                        enabled={isDesable}
                    >
                        <Text style={[styles.text_button, !isDesable && { color: '#9C98A6' }]}>Entrar</Text>
                    </BaseButton>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}
export default SigIn;