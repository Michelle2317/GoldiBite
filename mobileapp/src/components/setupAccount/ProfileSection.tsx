import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, HelperText } from 'react-native-paper';
import PrimaryInputText from "@/src/components/paperUiElement/PrimaryInputText"
import PaperUIDropdown from '@/src/components/paperUiElement/PaperUIDropdown'
import TextInputMask from 'react-native-text-input-mask'

const ProfileSection = ({ profile, callback }) => {

    const [profileInformation, setProfileInformation] = useState({ ...profile });

    const OPTIONS = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Prefer not to say', value: 'other' },
    ];

    let age_range = []
    for (let i = 1; i <= 100; i++) {
        age_range.push({ label: i.toString(), value: i.toString() });
    }
    const AGE_OPTIONS = age_range;

    useEffect(() => {
        callback(profileInformation);
        console.log(profileInformation.age)
    }, [profileInformation]);

    const handleUsernameOnChange = (e) => {
        setProfileInformation({ ...profileInformation, 'username': e });
    }

    const handleAgeOnChange = (e) => {
        setProfileInformation({ ...profileInformation, 'age': e });
    }
    const handleGenderOnChange = (e) => {
        setProfileInformation({ ...profileInformation, 'gender': e });
    }

    const ageChecking = () => {
        return profile == undefined || isNaN(profile.age)
    }
    return (<>

        <Text variant="headlineMedium" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Create a Profile</Text>
        <View style={styles.questionContainer}>
            <PrimaryInputText label="Username" value={profileInformation.username} onChangeText={handleUsernameOnChange} />
            <PaperUIDropdown label="Gender" placeholder="Select gender" option={OPTIONS} value={profileInformation.gender} callback={handleGenderOnChange} />
            <PrimaryInputText label="Age" value={profileInformation.age} onChangeText={handleAgeOnChange} />
            <HelperText type="error" visible={ageChecking()}>
                Age must have a number!
            </HelperText>
        </View>
    </>)
}

export default ProfileSection;


const styles = StyleSheet.create({
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

    }
});