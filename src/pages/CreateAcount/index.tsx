import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import InputSignIn from '../../components/InputSignIn';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';

const CreateAcount: React.FC = () => {
    const [steep, setStep] = useState(1);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleProgressAcount = () => {
        if (steep < 2)
            return setStep(2)
        submitAcount()
    };

    const submitAcount = async () => {
        setEmail('');
        setPassword('');
        setNome('');
        setSobrenome('');
    }
    return (
        <>

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
                                placeholder={{ input1: 'nome', input2: 'sobrenome' }}
                                setInput1={setNome}
                                setInput2={setSobrenome}
                                getInput1={nome}
                                getInput2={sobrenome}
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
        </>
    )
}

export default CreateAcount