import React, { useState } from 'react';
import { Avatar } from 'react-native-paper';
import { View, StyleSheet, Platform, Linking } from 'react-native';

export default function SosButton() {
    const [isPressed, setPressed] = useState(false);

    const handlePress = () => {
        setPressed(!isPressed);
        makeSosCall();
    }

    const makeSosCall = () => {
        if (Platform.OS === "android") {
            Linking.openURL("tel: 6044345734");
        } else {
            Linking.openURL("telprompt: 6044345734");
        }
    }

    return (<>
        <Avatar.Text
            size={64}
            label="sos"
            onTouchStart={handlePress}
            onTouchEnd={handlePress}
            style={isPressed ? styles.sosBtnPressed : styles.sosBtn}
            labelStyle={isPressed ? styles.sosFrontPressed : styles.sosFront} />
    </>);
}

const styles = StyleSheet.create({
    sosBtn: {
        backgroundColor: '#D25409'
    },
    sosFront: {
        color: '#000000',
        fontSize: 30,
        fontWeight: 'normal',
    },
    sosBtnPressed: {
        backgroundColor: 'red'
    },
    sosFrontPressed: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'normal',

    }
})