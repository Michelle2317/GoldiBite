import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image } from "react-native";
import PrimaryInputText from '@/src/components/paperUiElement/PrimaryInputText';
import PrimaryButton from '@/src/components/paperUiElement/PrimaryButton';
import { useRouter } from "expo-router";
import UserStoreDataUtils from "@/src/utils/UserStoreDataUtils";
import PaperUIDropdown from '@/src/components/paperUiElement/PaperUIDropdown'

const profileView = () => {
    const router = useRouter();
    const { getProfile, storeProfile, removeProfile } = UserStoreDataUtils();
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

    const OPTIONS = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ];
    let age_range = []
    for (let i = 1; i <= 100; i++) {
        age_range.push({ label: i.toString(), value: i.toString() });
    }
    const AGE_OPTIONS = age_range;

    const handleBackBtn = () => {
        
        const storeData = async () => {
            await storeProfile(JSON.stringify(profile));
          }
          storeData()
        router.back();
    }


    const handleUsernameOnChange = (e) => {
        setProfile({ ...profile, 'username': e });
    }

    const handleAgeOnChange = (e) => {
        setProfile({ ...profile, 'age': e });
    }
    const handleGenderOnChange = (e) => {
        setProfile({ ...profile, 'gender': e });
    }
    return (<>
        <View style={styles.container}>
            <View style={styles.profileContainer}>
{/* 
                <Image
                    source={profile.icon.source}
                    style={{ width: 130, height: 130, alignSelf: "center" }}
                />  */}

                <View style={styles.questionContainer}>
                    <PrimaryInputText label="Nickname" value={profile.username} onChangeText={handleUsernameOnChange} />

                    <PaperUIDropdown label="Age" placeholder="Select age" option={AGE_OPTIONS} value={profile.age} callback={handleAgeOnChange} />
            <PaperUIDropdown label="Gender" placeholder="Select gender" option={OPTIONS} value={profile.gender} callback={handleGenderOnChange} />
                  

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