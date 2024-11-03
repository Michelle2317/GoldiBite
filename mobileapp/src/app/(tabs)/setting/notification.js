import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image } from "react-native";
import { Text, Switch } from 'react-native-paper';
import PrimaryButton from '../../../components/paperUiElement/PrimaryButton';
import PrimaryInputText from '../../../components/paperUiElement/PrimaryInputText';
import { useRouter } from "expo-router";

const notification = () => {
    const router = useRouter();
    const [allowNotification, setAllowNotification] = useState(false);
    const [timeSensitiveNaotification, setTimeSensitiveNaotification] = useState(false);



    const onAllowNotificationSwitch = () => setAllowNotification(!allowNotification);
    const onTimeSensitiveNaotificationSwitch = () => setTimeSensitiveNaotification(!timeSensitiveNaotification);
    const handleBackBtn = () => {
        //router.replace('/(tabs)/setting/Home')
        router.back();
    }

    return (<>
        <View style={styles.container}>
            
                <View style={styles.optionContainer}>
                    <View style={styles.description}>
                        <Text variant="titleMedium">Allow notifications</Text>
                        <Text variant="labelMedium">ALWAYS DELIVER IMMEDIATLY</Text>
                    </View>
                    <Switch value={allowNotification} onValueChange={onAllowNotificationSwitch} color='#00C9A2'  />
                </View>

                <View style={styles.optionContainer}>
                    <View style={styles.description}>
                        <Text variant="titleMedium">Time sensitive notifications</Text>
                        <Text variant="labelMedium">Time sensitive notifications are always delivered immediately and remain on the lock screen for an hour</Text>
                    </View>
                    <Switch value={timeSensitiveNaotification} onValueChange={onTimeSensitiveNaotificationSwitch}  color='#00C9A2'  />
                </View>
                <View style={styles.optionContainer}>
                </View>
                <View style={styles.optionContainer}>
                </View>
                <View style={styles.optionContainer}>
                </View>
            <PrimaryButton buttonText="Save" callback={handleBackBtn} />
        </View>
    </>)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        padding: 20,
        paddingTop: 50,
        gap: 10,
        flexDirection: 'column',
        alignContent: 'center',
    },
    questionContainer: {
        flex: 1,
        display:"flex",
    },
    optionContainer: {
        flex: 1,
        flexDirection:  "row"
    },
    description: {
        flex: 1,
        flexDirection:"column"
    },
    buttonContainer:{
        flex:0,
        alignSelf:"flex-end",
    },


});
export default notification;