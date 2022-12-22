import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignUpScreen = () => {
    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSignRegisterPress = () => {
        console.warn('register press')
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    placeholder={'userName'}
                    value={userName}
                    setValue={setUserName}
                />
                <CustomInput
                    placeholder={'email'}
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder={'password'}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomInput
                    placeholder={'confirmPassword'}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    secureTextEntry
                />
                <CustomButton
                    text={'Register'}
                    onPress={onSignRegisterPress} />

                <Text style={styles.text}>By registering, you confirm that you accept our{' '}
                    <Text style={styles.link}> Terms of Use </Text>and{' '}<Text style={styles.link}>Privacy Policy</Text>
                </Text>
                <CustomButton
                    text={'Have an account? Sign in'}
                    onPress={onSignInPress}
                    type={'TERTIARY'} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10
    },
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: '#fdb075',
    }
})

export default SignUpScreen;
