import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image } from "react-native";
import { Text, } from 'react-native-paper';
import PrimaryInputText from '../../../components/paperUiElement/PrimaryInputText';
import { Dropdown } from 'react-native-paper-dropdown';
import PrimaryButton from '../../../components/paperUiElement/PrimaryButton';
import { useRouter } from "expo-router";
import UserStoreDataUtils from "../../../utils/UserStoreDataUtils";

const profileView = () => {
    const router = useRouter();
    const { getProfile, storeProfile } = UserStoreDataUtils();
    const [profile, setProfile] = useState({});

    useEffect(() => {

        const getProfileData = async () => {
            let storeData = await getProfile();
            setProfile(storeData);
            console.log(storeData);
            console.log(storeData.icon.source);
        }
        getProfileData();
    }, []);

    const handleBackBtn = () => {

        const storeData = async () => {
            await storeProfile(JSON.stringify(profile));
        }
        storeData()
        router.back();
    }

    const handleEmergencyContactNameOnChange = (e) => {
        setProfile({ ...profile, 'emergency_contact_name': e });
    }

    const handleEmergencyRelationshipOnChange = (e) => {
        setProfile({ ...profile, 'emergency_relationship': e });
    }
    const handleEmergencyContactNumberOnChange = (e) => {
        setProfile({ ...profile, 'emergency_contact_number': e });
    }

    return (<>
        <View style={styles.container}>
            <View style={styles.contentContainer}>

                <Text variant="titleMedium" style={styles.title}>Emergency Contact 1</Text>
                <PrimaryInputText label="Emergency Contact" value={profile.emergency_contact_name} onChangeText={handleEmergencyContactNameOnChange} />
                <PrimaryInputText label="Relationship" value={profile.emergency_relationship} onChangeText={handleEmergencyRelationshipOnChange} />
                <PrimaryInputText label="Phone Number" value={profile.emergency_contact_number} onChangeText={handleEmergencyContactNumberOnChange} />

            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton buttonText="Save" callback={handleBackBtn} />
            </View>
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
    contentContainer: {
        flex: 6,
        display: "flex",
        gap: 10,
    },
    buttonContainer: {
        flex: 1,
        gap: 10,
    },
    title: {
        alignSelf: "center",
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        marginBottom: 10
    }

});

export default profileView;