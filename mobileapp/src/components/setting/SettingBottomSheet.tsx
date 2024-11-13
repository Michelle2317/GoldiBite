import React, { useCallback, useMemo, useRef, useState } from 'react';
import {  StyleSheet } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import TouchableButton from "./TouchableButton"
import ToggleTheme from './ToggleTheme';

const SettingBottomSheet = () => {
    // variables
    const snapPoints = useMemo(() => ["80%"], []);
    //ref
    const bottomSheetRef = useRef(null);
    // callbacks 
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, [])

    return (<>
        <GestureHandlerRootView style={styles.bottomSheetContainer}>
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                enableDynamicSizing={false}
                enableOverDrag={false}
                snapPoints={snapPoints}
                handleStyle={{ backgroundColor: "#FCE4B6", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                handleIndicatorStyle={{ backgroundColor: "unset" }} >
                <BottomSheetView style={styles.bottomSheetStyle}>
                <TouchableButton name="Edit Profile" target="profileView" />
                <TouchableButton name="Edit allergiers" target="allergy" />
                <TouchableButton name="Emergency contact" target="emergency" />
                <TouchableButton name="Preferences" target="preference" />
                <ToggleTheme />
                <TouchableButton name="App Info" target="appinfo" />
                <TouchableButton name="Logout" target="" />
                    {/* <TouchableButton name="Allergy" target="allergy" />
                    <TouchableButton name="Location" target="location" />
                    <TouchableButton name="Notification" target="notification" />
                    <TouchableButton name="App Info" target="appinfo" /> */}
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    </>)
}

const styles = StyleSheet.create({
    
    bottomSheetContainer: {
        flex: 2,
        padding: 0,
        flexDirection: "column",
        backgroundColor: "#F4EADA",
    },
    bottomSheetStyle: {
        flex: 1,
        padding: 0,
        gap: 10,
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: '#FCE4B6'
    },
})

export default SettingBottomSheet;