import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import InputSignIn from '../../components/InputSignIn';
import TopHeader from '../../components/TopHeader';
import register from '../../contexts/register';

import styles from './styles';
import Concluded from '../../components/concluded';

const CreateAcount: React.FC = () => {
    const [steep, setStep] = useState(1);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleProgressAcount = () => {
        if (steep < 2)
            return setStep(2)
        submitAcount()
    };

    const submitAcount = async () => {
        const response = await register({ name, lastname, email, password })
        if (response === 201) {
            setStep(3)
             setEmail('');
             setPassword('');
             setName('');
             setLastname('');
        }
        Alert.alert(
            "",
            "Não foi possivel cadastrar o usuário",
            [
                {
                    text: "Ok",
                }
            ]
        )
    }
    return (
        <>
            {steep === 3 ?
                <Concluded
                    page='SignIn'
                    title='Cadastro concluído!'
                    subTitle='Agora você faz parte da plataforma da Proffy'
                /> :
                <View style={styles.container}>
                    <StatusBar style="dark" />
                    <TopHeader navigatePage='SignIn' />
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {`Crie sua\nconta gratuíta`}
                        </Text>
                        <Text style={styles.subtitle}>
                            Basta preencher esses dados e você estará conosco.
                </Text>
                    </View>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "height" : "position"}
                        style={styles.inputContainer}
                    >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            {steep === 1 ?
                                <InputSignIn
                                    title='01. Quem é você?'
                                    placeholder={{ input1: 'name', input2: 'lastname' }}
                                    setInput1={setName}
                                    setInput2={setLastname}
                                    getInput1={name}
                                    getInput2={lastname}
                                    buttom={{
                                        onpress: handleProgressAcount,
                                        title: 'Próximo',
                                        color: '#8257E5'
                                    }}
                                />
                                :
                                <InputSignIn
                                    title='02. Email e Senha'
                                    placeholder={{ input1: 'email', input2: 'password' }}
                                    setInput1={setEmail}
                                    setInput2={setPassword}
                                    getInput1={email}
                                    getInput2={password}
                                    buttom={{
                                        onpress: submitAcount,
                                        title: 'Concluir cadastro',
                                        color: '#04D361'
                                    }}
                                />

                            }
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </View>
            }
        </>
    )
}

export default CreateAcount