import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'; 

import { View, StyleSheet, Image } from "react-native";
import { Text } from 'react-native-paper';
import SettingBottomSheet from "../../../components/setting/SettingBottomSheet"
import UserStoreDataUtils from "../../../utils/UserStoreDataUtils";
import { useAuth } from "@/src/context/AuthContext";

const App = () => {
    const { getProfile } = UserStoreDataUtils();
    const [profile, setProfile] = useState({});
    const { authState } = useAuth();

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
            <SettingBottomSheet />
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
        flex: 0,
        paddingTop: 20,
        gap: 10,
    }
});

export default App;