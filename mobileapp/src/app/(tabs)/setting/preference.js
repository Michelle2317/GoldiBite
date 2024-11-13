import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image } from "react-native";
import PrimaryButton from '@/src/components/paperUiElement/PrimaryButton';
import { useRouter } from "expo-router";
import UserStoreDataUtils from "@/src/utils/UserStoreDataUtils";
import PaperUIDropdown from '@/src/components/paperUiElement/PaperUIDropdown'

const profileView = () => {
    const router = useRouter();
    const { getProfile, storeProfile } = UserStoreDataUtils();
    const [profile, setProfile] = useState({});

    const LANGUAGE_OPTIONS = [{ label: 'English', value: 'English' }];
    const LOCATION_OPTIONS = [
        { value: 'NL', label: 'Newfoundland and Labrador' },
        { value: 'PE', label: 'Prince Edward Island' },
        { value: 'NB', label: 'New Brunswick' },
        { value: 'QC', label: 'Quebec' },
        { value: 'QN', label: 'Ontario' },
        { value: 'MB', label: 'Manitoba' },
        { value: 'SK', label: 'Saskatchewan' },
        { value: 'AB', label: 'Alberta' },
        { value: 'BC', label: 'British Columbia' },
    ]
    useEffect(() => {
        const getProfileData = async () => {
            let storeData = await getProfile();
            if (!storeData.location) storeData.location = '';
            if (!storeData.language) storeData.language = '';
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
                    <PaperUIDropdown label="Language" placeholder="Select language" option={LANGUAGE_OPTIONS} value={profile.language} callback={handleLanguageOnChange} />
                    <PaperUIDropdown label="Location" placeholder="Select location" option={LOCATION_OPTIONS} value={profile.location} callback={handleLocationOnChange} />
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