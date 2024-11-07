import React, { useState } from "react";
import {View, StyleSheet } from "react-native";
import { onboardingList } from "../../data/onboarding";
import OnBoardingContent from "../../components/onBoarding/OnBoardingContent";
import { useRouter } from "expo-router";
const OnBoarding = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const router = useRouter();

    const handleBackButton = () => {
        setCurrentStep(currentStep > 0 ? currentStep - 1 : 1);
    }
    const handleNextButton = () => {
        if (currentStep + 1 >= onboardingList.length) {
            router.replace('/(nonauth)/login');
        } else {
            setCurrentStep(currentStep + 1);
        }
    }
    const handleSkipButton = () => {
        router.replace('/(nonauth)/login');
    }
    return (<>
        <View style={styles.container}>
            <OnBoardingContent content={onboardingList[currentStep]} totalStep={onboardingList.length} language="eng" next={handleNextButton} back={handleBackButton} skip={handleSkipButton} />
        </View>
    </>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 80,
        gap: 50,
        alignItems: "center",
        justifyContent: "space-evenly"
    }
});
export default OnBoarding