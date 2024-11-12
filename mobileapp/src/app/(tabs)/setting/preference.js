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

    const LANGUAGE_OPTIONS = [{ label: 'English', value: 'English' }];
    const LOCATION_OPTIONS = [
        { label: 'NL', value: 'Newfoundland and Labrador' },
        { label: 'PE', value: 'Prince Edward Island' },
        { label: 'NB', value: 'New Brunswick' },
        { label: 'QC', value: 'Quebec' },
        { label: 'QN', value: 'Ontario' },
        { label: 'MB', value: 'Manitoba' },
        { label: 'SK', value: 'Saskatchewan' },
        { label: 'AB', value: 'Alberta' },
        { label: 'BC', value: 'British Columbia' },
    ]
    useEffect(() => {
        const getProfileData = async () => {
            let storeData = await getProfile();
            if(!storeData.location) storeData.location = '';
            if(!storeData.language) storeData.language = '';
            setProfile(storeData);
            
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

    const handleLanguageOnChange = (e) => {
        setProfile({ ...profile, 'language': e });
    }

    const handleLocationOnChange = (e) => {
        setProfile({ ...profile, 'location': e });
    }

    

    return (<>
        <View style={styles.container}>
            <View style={styles.profileContainer}>

                <View style={styles.questionContainer}>
                    <Dropdown
                        label="Language"
                        placeholder="Select language"
                        options={LANGUAGE_OPTIONS}
                        value={profile.language}
                        onSelect={handleLanguageOnChange}
                        hideMenuHeader={true}
                        menuContentStyle={{ backgroundColor: "#FCE4B6" }}
                    />

                    <Dropdown
                        label="Location"
                        placeholder="Select location"
                        options={LOCATION_OPTIONS}
                        value={profile.location}
                        onSelect={handleLocationOnChange}
                        menuContentStyle={{ backgroundColor: "#FCE4B6" }}
                        hideMenuHeader={true}
                    />
                    <PrimaryButton buttonText="Save" callback={handleBackBtn} />
                </View>
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
    questionContainer: {
        flex: 0,
        display: "flex",
        gap: 10,
    },

});

export default profileView;