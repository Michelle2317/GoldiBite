import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {  Text } from 'react-native-paper';
import PrimaryInputText from "../../components/paperUiElement/PrimaryInputText"

const EmergencySection = ({ profile, callback }) => {
    const [profileInformation, setProfileInformation] = useState({ ...profile});
    
    useEffect(() => {
        callback(profileInformation);
    }, [profileInformation]);

    const handleEmergencyContactNameOnChange = (e) => {
        setProfileInformation({ ...profileInformation, 'emergency_contact_name': e });
    }

    const handleEmergencyRelationshipOnChange = (e) => {
        setProfileInformation({ ...profileInformation, 'emergency_relationship': e });
    }
    const handleEmergencyContactNumberOnChange = (e) => {
        setProfileInformation({ ...profileInformation, 'emergency_contact_number': e });
    }

    return (<>
        <Text variant="headlineLarge" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Emergency Contact</Text>
        <View style={styles.questionContainer}>
            <PrimaryInputText label="Emergency Contact" value={profileInformation.emergency_contact_name} onChangeText={handleEmergencyContactNameOnChange} />
            <PrimaryInputText label="Relationship" value={profileInformation.emergency_relationship} onChangeText={handleEmergencyRelationshipOnChange} />
            <PrimaryInputText label="Phone Number" value={profileInformation.emergency_contact_number} onChangeText={handleEmergencyContactNumberOnChange} />
        </View>
    </>)
}

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

export default EmergencySection;
