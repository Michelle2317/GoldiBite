import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image } from "react-native";
import { Text, Switch } from 'react-native-paper';
import PrimaryButton from '../../../components/paperUiElement/PrimaryButton';
import { useRouter } from "expo-router";

const notification = () => {
    const router = useRouter();
    const handleBackBtn = () => {
        router.back();
    }

    return (<>
        <View style={styles.container}>
            <View style={styles.optionContainer}>
                <Text variant="bodyMedium" style={{marginBottom:10}}>Goldi Bites is inspired by the story of Goldilocks and the Three Bears, where Goldilocks chooses the “just right” porridge. Our app helps individuals with food allergies find the “just right” food that’s safe for them.</Text>

                <Text variant="bodyMedium" style={{marginBottom:10}}>With the tagline “The right bite, every time,” Goldi Bites allows users to scan food products or menus to check for allergens instantly. The app filters out risky foods and highlights the safest options, making it easier to navigate dietary restrictions.</Text>

                <Text variant="bodyMedium" style={{marginBottom:10}}>We are a team of students from the Digital Design and Web Development program at BCIT, committed to building a tool that promotes food safety:</Text>
                <Text variant="bodyMedium" style={{marginBottom:10}}>  {'\u2022'} Michelle & Timothy – Developers</Text>
                <Text variant="bodyMedium" style={{marginBottom:10}}>  {'\u2022'} Leslie & Gavin – Designers</Text>
                <Text variant="bodyMedium" style={{marginBottom:10}}>  {'\u2022'} Cindy & Ale - </Text>
                <Text variant="bodyMedium" style={{marginBottom:10}}>  {'\u2022'} Julia & Andrew – Information Gathering</Text>
                <Text variant="bodyMedium" style={{marginBottom:10}}>For more information, contact us at +441 158 2755.</Text>

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
        display: "flex",
    },
    optionContainer: {
        flex: 1,
        flexDirection: "column"
    },
    description: {
        flex: 1,
        flexDirection: "column"
    },
    buttonContainer: {
        flex: 1,
        alignSelf: "flex-end",
    },


});
export default notification;