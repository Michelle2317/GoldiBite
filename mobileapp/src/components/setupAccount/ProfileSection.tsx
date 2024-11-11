import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {  Text } from 'react-native-paper';
import { PaperProvider } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown';
import PrimaryInputText from "../../components/paperUiElement/PrimaryInputText"

const ProfileSection = ({ profile, callback }) => {

    const [profileInformation, setProfileInformation] = useState({ ...profile});

    const OPTIONS = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ];
   
    let age_range = []
    for(let i =1  ; i<=100; i++){
        age_range.push({ label:i.toString(),value:i.toString()});
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
        console.log(e)
        setProfileInformation({ ...profileInformation, 'age': e });
    }
    const handleGenderOnChange = (e) => {
        setProfileInformation({ ...profileInformation, 'gender': e });
    }
    return (<>

        <Text variant="headlineLarge" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Create a Profile</Text>
        <View style={styles.questionContainer}>
            <PrimaryInputText label="Username" value={profileInformation.username} onChangeText={handleUsernameOnChange} />
            


            <Dropdown
                label="Age"
                placeholder="Select Age"
                options={AGE_OPTIONS}
                value={profileInformation.age}
                onSelect={handleAgeOnChange}
                hideMenuHeader={true}
                menuContentStyle={{ backgroundColor: "#FCE4B6" }}
            />

            <Dropdown
                label="Gender"
                placeholder="Select Gender"
                options={OPTIONS}
                value={profileInformation.gender}
                onSelect={handleGenderOnChange}
                hideMenuHeader={true}
                menuContentStyle={{ backgroundColor: "#FCE4B6" }}
            />
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