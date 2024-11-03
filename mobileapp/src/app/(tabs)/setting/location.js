import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image } from "react-native";
import PrimaryButton from '../../../components/paperUiElement/PrimaryButton';
import PrimaryInputText from '../../../components/paperUiElement/PrimaryInputText';
import { useRouter } from "expo-router";

const location = () => {
    const router = useRouter();
    const [location, setLocation] = useState('V5E2G9');


    const handleBackBtn = () => {
        //router.replace('/(tabs)/setting/Home')
        router.back();
    }

    return (<>
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <PrimaryInputText label="Location" value={location} onChangeText={setLocation} initialState='label' />
            </View>
            <PrimaryButton buttonText="Save" callback={handleBackBtn} />
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
    profileContainer: {
        flex: 3,
        display: "flex",
        gap: 10,
    }

});
export default location;