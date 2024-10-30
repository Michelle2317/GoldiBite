import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GuideDetails from "@/src/components/guides/GuideDetails";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const steps = [
    {
        heading: "Step 1: Prepare",
        description: "Remove the EpiPen from its case and hold it in your dominant hand."
    },
    {
        heading: "Step 2: Remove Safety Cap",
        description: "Pull off the blue safety cap to prepare for injection."
    },
    {
        heading: "Step 3: Position the EpiPen",
        description: "Place the orange tip against the outer thigh at a 90-degree angle."
    },
    {
        heading: "Step 4: Administer the Injection",
        description: "Push down hard until you hear a click, which means the injection has started."
    },
    {
        heading: "Step 5: Keep EpiPen in Place",
        description: "Keep the EpiPen in place for 3 seconds to ensure proper delivery of the medication."
    },
    {
        heading: "Step 6: Remove and Dispose",
        description: "Remove the EpiPen and dispose of it properly. Seek medical attention immediately."
    }
];

export default function Epipen() {
    const [step, setStep] = useState(0); 
    const navigation = useNavigation(); 

    const handleNextStep = () => {
        if (step < steps.length - 1) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const handleBackToGuides = () => {
        navigation.navigate('index'); 
    };

    const handleBackStep = () => {
        if (step > 0) {
            setStep((prevStep) => prevStep - 1); 
        }
    };

    return (
        <View style={styles.container}>
            <GuideDetails 
                title="How to use an Epipen?" 
                heading={steps[step].heading} 
                description={steps[step].description} 
                onNext={handleNextStep}
                showNextButton={step < steps.length - 1}
                onBack={step > 0 ? handleBackStep : null} 
            />
            {step === steps.length - 1 && ( 
                <Button 
                    mode="contained" 
                    onPress={handleBackToGuides} 
                    style={styles.guideButton}
                >
                    Back to Guides
                </Button>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        padding: 20,
        marginBottom: 60,
    },
    guideButton: {
        marginBottom: 50,
    },
});
