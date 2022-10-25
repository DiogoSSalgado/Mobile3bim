import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import styles from "./styles";
import { Subscription } from 'expo-media-library';

export default function Pedometro() {
    const [currentStepCount, setCurrentStepCount] = useState(0)
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking')
    const [pastStepCount, setPastStepCount] = useState (0)
    let [subscription, setSubscription] = useState<Subscription | null>(null);

    useEffect(() => {
        async function permission() {
            console.log(await Pedometer.requestPermissionsAsync())
            console.log(await Pedometer.getPermissionsAsync())

        }
        permission()
        _subscribe();
        return () => _unsubscribe();
    }, []);

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    const _subscribe = () => {
        subscription = Pedometer.watchStepCount(result => {
            setCurrentStepCount(result.steps)
        });

        Pedometer.isAvailableAsync().then(
            result => {
                setIsPedometerAvailable(String(result));
            },
            error => {
                setIsPedometerAvailable("Couldn't get isPedometerAvailable: " + error);
            }
        );

        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate() - 1);

        Pedometer.getStepCountAsync(start, end).then(
            result => {
                setPastStepCount(result.steps);
            },
            error => {
                console.log("Couldn't get stepCount: " + error);
            }
        );
    };

    return (
        <View style={styles.contaier}>
            <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
            <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
            <Text>Walk! And watch this go up: {currentStepCount}</Text>
        </View>
    )
}