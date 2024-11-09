import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Icon, ProgressBar, Text, MD3Colors, Button } from 'react-native-paper';
import PrimaryButton from "../../components/paperUiElement/PrimaryButton";
const OnBoardingContent = ({ content, totalStep, language = "eng", back, next, skip }) => {
    if (!content) return (<></>);
    const process = content.step / totalStep;
    return (<>
        <View style={styles.processBarContainer}>
            <ProgressBar progress={process} color="#00C9A2" style={{ backgroundColor: '#FFC858' }} />
        </View>

        <Text variant="headlineLarge" style={{ fontWeight: 'bold' }}>{content[language].title}</Text>
        <Icon
            source={content.icon}
            color="#00C9A2"
            size={200}

        />
        <Text variant="titleLarge" style={{ textAlign: "center", fontWeight: 'bold' }} >{content[language].description}</Text>

        <View>
            <View  style={styles.buttonContainer}>
                <PrimaryButton buttonText={"Back"} callback={back} type="secondary" styles={{ alignSelf: "flex-start", display: (content.step == 1 ? "none" : "flex") }} />
                <PrimaryButton buttonText={"Next"} callback={next} styles={{ alignSelf: "flex-end" }} />
            </View>
            <View style={styles.skipButtonContainer}>
                <Button mode="text" theme={skipTheme} onPress={skip} style={styles.skipButtonStyle} labelStyle={styles.skipButtonLabelStyle}>Skip</Button>
            </View>
        </View>
    </>)
}

const skipTheme = {colors:{primary:'#000000'}}

const styles = StyleSheet.create({
    processBarContainer: {
        width: 280,
        height: 20,
        borderRadius: 15
    },
    buttonContainer: {
        width: 280,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    skipButtonContainer: {
        width: 280,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    skipButtonStyle:{
        marginRight:11
    },
    skipButtonLabelStyle:{
        textDecorationLine:"underline"
    }

});
export default OnBoardingContent