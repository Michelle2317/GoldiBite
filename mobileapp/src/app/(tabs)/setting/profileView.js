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

                    <Dropdown
                        label="Age"
                        placeholder="Select Age"
                        options={AGE_OPTIONS}
                        value={profile.age}
                        onSelect={handleAgeOnChange}
                        hideMenuHeader={true}
                        menuContentStyle={{ backgroundColor: "#FCE4B6" }}
                    />

                    <Dropdown
                        label="Gender"
                        placeholder="Select Gender"
                        options={OPTIONS}
                        value={profile.gender}
                        onSelect={handleGenderOnChange}
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