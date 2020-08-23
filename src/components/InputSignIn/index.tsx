import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface InputProps {
    title: string,
    placeholder: {
        input1: string,
        input2: string,
    },
    subTitle?: Function,
    setInput1: Function,
    setInput2: Function,
    getInput1: string,
    getInput2: string,
    buttom: {
        onpress: Function,
        title: string,
        color: string,
        next?: Function,
    }
}

const InputSignIn: React.FC<InputProps> = ({ title, placeholder, buttom, children, subTitle, setInput1, setInput2, getInput1, getInput2 }) => {
    const [isDesable, setDesable] = useState(false);
    const [isShowPassword, setShowPassword] = useState(true);

    function enabled() {
        if (getInput1.length > 0 && getInput2.length > 0)
            return setDesable(true)
        return setDesable(false)
    };

    useEffect(() => {
        enabled()
    }, [getInput1, getInput2]);

    const handleSubmit = () => {
        buttom.next ? buttom.next() : null
        buttom.onpress()
        
    }

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                {!!subTitle && subTitle()}
            </View>
            <View style={styles.inputContain}>
                <View style={[styles.inputItem, { borderTopRightRadius: 8, borderTopLeftRadius: 8 }]}>
                    <TextInput
                        onChangeText={text => setInput1(text)}
                        value={getInput1}
                        placeholder={placeholder.input1}
                        style={styles.input}
                    />
                </View>
                <View style={[styles.inputItem, { borderBottomRightRadius: 8, borderBottomLeftRadius: 8 }]}>
                    <TextInput
                        onChangeText={text => setInput2(text)}
                        secureTextEntry={placeholder.input2 === 'password' && isShowPassword}
                        value={getInput2}
                        placeholder={placeholder.input2}
                        style={styles.input}
                    />
                    {placeholder.input2 === 'password' &&
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
                    }
                </View>
                {children}
                <RectButton
                    style={[styles.button, isDesable && { backgroundColor: buttom.color }]}
                    onPress={handleSubmit}
                    enabled={isDesable}
                >
                    <Text
                        style={[styles.buttonTitle, isDesable && { color: '#FFF' }]}
                    >
                        {buttom.title}
                    </Text>
                </RectButton>
            </View>
        </>
    )
}

export default InputSignIn