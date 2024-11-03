import React, { useCallback, useMemo, useRef } from 'react'; 

import { View, StyleSheet, Image } from "react-native";
import { Text } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import TouchableButton from "../../../components/setting/TouchableButton"
import SettingBottomSheet from "../../../components/setting/SettingBottomSheet"

const App = () => {
    return (<>
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('@/assets/images/elements/user_icon1.png')}
                    style={{ width: 130, height: 130, alignSelf: "center" }}
                />
                <Text variant="titleMedium" style={{ alignSelf: "center" }}>Kaylie1333</Text>
                <Text variant="bodyMedium" style={{ alignSelf: "center" }}>kayliecca113@gmail.com</Text>
               
            </View>
            <SettingBottomSheet />
        </View>
    </>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        gap: 10,
        flexDirection: 'column',
        alignContent: 'center',
    },
    profileContainer: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
        gap: 10,
    },  
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
});

export default App;