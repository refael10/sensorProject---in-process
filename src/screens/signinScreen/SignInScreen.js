import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import Logo from '../../../assets/sensor.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPress = () => {
        // if (userName !== 'dror') {
        //     return Alert.alert('rgrtgew')
        // }
        navigation.navigate('Home');

    }
    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode='contain' />
                <CustomInput
                    placeholder={'userName'}
                    value={userName}
                    setValue={setUserName}

                />
                <CustomInput
                    placeholder={'password'}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomButton
                    text={'Sign In'}
                    onPress={onSignInPress} />
                <CustomButton
                    text={'Dont have an account? Create one'}
                    onPress={onSignUpPress}
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginTop: 30,
        marginBottom: 40
    }
})

export default SignInScreen;
