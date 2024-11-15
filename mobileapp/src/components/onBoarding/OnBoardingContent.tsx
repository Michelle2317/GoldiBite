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
        <View style={styles.title}>
            <Text variant="headlineLarge" style={{ fontWeight: 'bold' }}>{content[language].title}</Text>
        </View>
        <Icon
            source={content.icon}
            color="#00C9A2"
            size={200}
        />
        <Text variant="titleLarge" style={{ textAlign: "center", fontWeight: 'bold', height: 100 }}>{content[language].description}</Text>

        <View>
            <View style={styles.buttonContainer}>
                <View style={styles.nextContainer}>
                    <PrimaryButton buttonText={"Next"} callback={next} />
                    <Button mode="text" theme={skipTheme} onPress={skip} labelStyle={styles.skipButtonLabelStyle}>Skip</Button>
                </View>
                <View style={styles.backContainer}>

                    {content.step != 1 && <PrimaryButton buttonText={"Back"} callback={back} type="secondary"  />}
                    
                </View>
            </View>
        </View>
    </>)
}

const skipTheme = { colors: { primary: '#000000' } }

const styles = StyleSheet.create({
    processBarContainer: {
        width: 300,
        height: 20,
        borderRadius: 15
    },
    title: {
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        width: 300,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        width: 300,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    skipButtonContainer: {
        width: 300,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    skipButtonLabelStyle: {
        textDecorationLine: "underline"
    },

});
export default OnBoardingContent