import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { Barometer } from 'expo-sensors';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const backToSignIn = () => {
        navigation.navigate('SignIn');
    }

    const [{ pressure, relativeAltitude }, setData] = useState({ pressure: 0, relativeAltitude: 0 })
    const [subscription, setSubscription] = useState(null);
    const toggleListener = () => {
        subscription ? unsubscribe() : subscribe();
    }
    const subscribe = () => {
        setSubscription(Barometer.addListener(setData));
    }
    const unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heder}>Barometer page </Text>
            <View >
                <Text style={styles.parameter}>Pressure: {pressure} hPa</Text>
                <Button
                    onPress={toggleListener}
                    title='Chack barometer'
                />
                <View style={styles.btn}>
                    <Button

                        onPress={backToSignIn}
                        title='x'
                    />
                </View>


            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    heder: {
        backgroundColor: 'red',
        margin: 2,
        fontSize: 25,
    },
    parameter: {
        fontSize: 20,
    },
    btn: {
        marginTop: 20
    }
});
export default HomeScreen;