import React, { useCallback, useMemo, useRef } from 'react';

import {  StyleSheet } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import TouchableButton from "./TouchableButton"
const SettingBottomSheet = () => {
    // variables
    const snapPoints = useMemo(() => ["67%"], []);
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
                    <TouchableButton name="Profile" target="(tabs)/setting/profileView" />
                    <TouchableButton name="Allergy" target="(tabs)/setting/allergy" />
                    <TouchableButton name="Location" target="(tabs)/setting/location" />
                    <TouchableButton name="Notification" target="(tabs)/setting/notification" />
                    <TouchableButton name="App Info" target="(tabs)/setting/appinfo" />
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
        backgroundColor: "#FAF1E4",
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