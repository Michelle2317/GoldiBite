import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { ProgressBar, Text } from 'react-native-paper';
import PrimaryButton from "../../components/paperUiElement/PrimaryButton";
import { PaperProvider } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown';
import PrimaryInputText from "../../components/paperUiElement/PrimaryInputText"
import { Chip } from 'react-native-paper';

import { useRouter } from "expo-router";

const setupAccount = () => {
    const router = useRouter();
    
    const [step, setStep] = useState(1);
    const totalStep = 4
    const [process, setProcess] = useState(1)

    
    const handleBackBtn = () => {
        if(step == 1) return;
        setStep(step - 1);
        setProcess((step - 1) / totalStep);
        console.log(process)
    }
    const handleNextBtn = () => {
        if(step == 4) router.replace('/(setup)/welcome'); ; // router to anther path
        setStep(step + 1);
        setProcess((step + 1) / totalStep);
        console.log(process)
    }
    return (<>
        <View style={styles.container}>

            <View style={styles.processBarContainer}>
                <ProgressBar progress={ (step/totalStep) } color="#00C9A2" style={{ backgroundColor: '#FFC858' }} />
            </View>

            <View style={{ display: "flex", height: 500 }}>
                {
                    (step == 1) && <IconSection />
                }
                {
                    (step == 2) && <ProfileSection />
                }
                {
                    (step == 3) && <AllergiesSection />
                }
                {
                    (step == 4) && <EmergencySection />
                }
            </View>

            

            <View style={styles.buttonContainer}>
                {/* Button Container */}
                <PrimaryButton buttonText={"Back"} callback={handleBackBtn} type="secondary" styles={{ alignSelf: "flex-start", display: "flex" }} />
                <PrimaryButton buttonText={"Next"} callback={handleNextBtn} styles={{ alignSelf: "flex-end" }} />
            </View>

        </View>

    </>)
}

const IconSection = () => {
    return (<>

        {/* Questionnaire View */}
        <Text variant="headlineMedium" style={{ textAlign: "center", marginBottom: 30 }}>Select an Icon</Text>
        <View style={styles.questionSelectorContainer}>
            <Image
                source={require('@/assets/images/elements/user_icon1.png')}
                style={{ width: 80, height: 80 }}
            />
            <Image
                source={require('@/assets/images/elements/user_icon2.png')}
                style={{ width: 80, height: 80 }}
            />
            <Image
                source={require('@/assets/images/elements/user_icon3.png')}
                style={{ width: 80, height: 80 }}
            />
        </View>
    </>)
}

const ProfileSection = () => {
    const [nickname, setNickname] = useState("")
    const [gender, setGender] = useState("male")
    const [age, setAge] = useState("")

    const OPTIONS = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ];
    return (<>

        <Text variant="headlineMedium" style={{ textAlign: "center", marginBottom: 30 }}>Create a Profile</Text>
        <View style={styles.questionContainer}>
            <PrimaryInputText label="Nickname" value={nickname} onChangeText={setNickname} />
            <PrimaryInputText label="Age" value={age} onChangeText={setAge} />

            <PaperProvider style={{ width: 100 }} theme={{
                colors: {
                    surface: "#FCE4B6", surfaceVariant: "#FCE4B6", "elevation": {
                        "level0": "transparent",
                        "level1": "rgb(249, 243, 242)",
                        "level2": "rgb(245, 238, 235)",
                        "level3": "rgb(241, 233, 227)",
                        "level4": "rgb(240, 231, 224)",
                        "level5": "rgb(237, 228, 219)"
                    },
                }
            }}>
                <Dropdown
                    label="Gender"
                    placeholder="Select Gender"
                    options={OPTIONS}
                    value={gender}
                    onSelect={setGender}
                    menuContentStyle={{ backgroundColor: "#FCE4B6" }}
                />
            </PaperProvider>
        </View>
    </>)
}

const AllergiesSection = () => {

    const [allergies, setAllergies] = useState([
        "Eggs", "Milk", "Mustard", "Peanuts",
        "Fish", "Crustaceans and molluscs", "Sesame seeds", "Soy", "Sulphites", "Tree nuts", "Wheat and triticale"
    ]);
    return (<>
        <Text variant="headlineMedium" style={{ textAlign: "center", marginBottom: 30 }}>Select Allergy</Text>
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 20, width: 280 }}>
            {allergies && allergies.map((item, index) => {
                return (<>
                    <Chip key={index} theme={{ colors: { secondaryContainer: '#FFC858' } }}
                        mode='flat'
                        onPress={() => console.log('Pressed')}
                        selected={index % 2}>
                        {item}
                    </Chip>
                </>)
            })
            }
        </View>
    </>)

}

const EmergencySection = () => {

    const [contact, setContact] = useState("")
    const [relationship, setRelationship] = useState("")
    const [contactPhone, setContactPhone] = useState("")
    return (<>
        <Text variant="headlineMedium" style={{ textAlign: "center", marginBottom: 30 }}>Emergency Contact</Text>
        <View style={styles.questionContainer}>
            <PrimaryInputText label="Emergency Contact" value={contact} onChangeText={setContact} />
            <PrimaryInputText label="Relationship" value={relationship} onChangeText={setRelationship} />
            <PrimaryInputText label="contactPhone" value={contactPhone} onChangeText={setContactPhone} />
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "space-evenly"
        //justifyContent: "center",

    },
    processBarContainer: {
        width: 280,
        height: 20,
        borderRadius: 15,
        padding: 0,
        margin: 0
    },
    questionContainer: {
        width: 280,
        flex: 1,
        display: "flex",
        height: 300,
        gap: 10,
    },
    questionSelectorContainer: {
        flex: 1,
        flexDirection: 'row',
        display: "flex",
        gap: 10,
        height: 300,
        flexWrap: 1
    },
    buttonContainer: {
        width: 280,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    allergyContainer: {
        flex: 0,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        flexWrap: "wrap",
    }
});
export default setupAccount;