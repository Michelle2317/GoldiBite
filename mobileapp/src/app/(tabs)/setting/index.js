import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

import { View, StyleSheet, Image } from "react-native";
import { Text } from 'react-native-paper';
import SettingBottomSheet from "../../../components/setting/SettingBottomSheet"
import UserStoreDataUtils from "../../../utils/UserStoreDataUtils";
import { useAuth } from "@/src/context/AuthContext";
import TouchableButton from "@/src/components/setting/TouchableButton"
import ToggleTheme from '@/src/components/setting//ToggleTheme';
import { useTheme } from '@react-navigation/native';

const App = () => {
    const { getProfile } = UserStoreDataUtils();
    const [profile, setProfile] = useState({});
    const { authState } = useAuth();
    const { colors } = useTheme();
    const bottomSheetBackgroundColor =  colors.mode=="dark"? "#6A6A6A":"#FCE4B6";  

    useEffect(() => {

        const getProfileData = async () => {
            let storeData = await getProfile();
            setProfile(storeData);
            console.log(storeData);
            console.log(storeData.icon.source);
        }
        getProfileData();
    }, []);
    return (<>
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('@/assets/images/elements/user_icon1.png')}
                    style={{ width: 130, height: 130, alignSelf: "center" }}
                />
                <Text variant="titleMedium" style={{ alignSelf: "center" }}>{profile.username}</Text>
                <Text variant="bodyMedium" style={{ alignSelf: "center" }}>{authState?.username}</Text>
            </View>

            <View style={{
                backgroundColor: bottomSheetBackgroundColor, flex: 1,
                padding: 0,
                margin: 0,
                alignContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
            }}>

                <TouchableButton name="Edit Profile" target="profileView" />
                <TouchableButton name="Edit allergiers" target="allergy" />
                {/* <TouchableButton name="Emergency contact" target="emergency" /> */}
                <TouchableButton name="Preferences" target="preference" />
                <ToggleTheme />
                <TouchableButton name="App Info" target="appinfo" />
                <TouchableButton name="Logout" target="" />
            </View>
        </View>
    </>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        flexDirection: 'column',
        alignContent: "flex-start",
    },
    profileContainer: {
        flex: 1,
        paddingTop: 20,
        gap: 10,
    }
});

export default App;