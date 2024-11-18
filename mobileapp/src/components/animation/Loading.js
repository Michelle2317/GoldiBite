import React, { useEffect, useState } from 'react';
import { Animated, Text, View, StyleSheet, Button, useAnimatedValue, Image, Easing } from 'react-native';


export default function Loading() {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useAnimatedValue(0);
    const [left, setLeft] = useState(true);
    const [leftP, setLeftP] = useState(0)
    const leftPosition = useAnimatedValue(0);

    const rotate = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.loop(
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 6000,
                easing: Easing.linear,
                useNativeDriver: true,
            })).start();
    };



    const spin = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg']
    })

    const move= fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100]
    })


    useEffect(() => {
        rotate()
    }, [])

    return (<>
        <View>
            <Animated.Image
                style={{
                    width: 100,
                    height: 100,
                    // Bind opacity to animated value
                    transform: [{ rotate: spin }],
                    
                }}
                source={require('@/assets/images/GoldiBite_bear.png')}
            >
            </Animated.Image>
            <Text>Loading ...</Text>

        </View>
    </>);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingIcon: {
        flkex: 1,
        width: 50,
        height: 50,
    }
})