import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Image, View, StyleSheet, TextInput } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { BarCodeScanner } from 'expo-barcode-scanner';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useRouter, useNavigation  } from 'expo-router';


export default function Scanner(props) {
    const parent = props.navigation;

console.log(props);
    const router = useRouter();
    // variables
    const snapPoints = useMemo(() => ["20%"], []);


    //ref
    const bottomSheetRef = useRef(null);

    // callbacks 
    const handleSheetChanges = useCallback(index => {
        console.log('handleSheetChanges', index);
    }, [])


    const handleOnBlur = () => {
        router.push({ pathname: "barcodeScanner/barcodeResult", params: { barcode: inputBarcode } })
    }

    const handleBarCodeScanned = ({ type, data }) => {
        if (data !== null || data !== "") {
            setScanned(true);
            alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // call barcode scanner
    useEffect(() => {
        setScanned(false);
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);


    useEffect(() => {
        setTimeout(() => {
            setScanned(false);
        }, 2000);
    }, [scanned])

    useEffect(() => {
        if (barcode !== null && barcode !== "") {
            router.push({ pathname: "barcodeScanner/barcodeResult", params: { barcode: barcode } })
        }
    }, [barcode])

    // hidden the bottom navigation bar
    


    // usetState
    const [barcode, setBarcode] = useState("");
    const [inputBarcode, setInputBarcode] = useState("");

    //barcode scanner 
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    return (
        <GestureHandlerRootView style={styles.container} options={{
            tabBarStyle: { display: "none" },
         }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

            <Image
                source={require('@/assets/images/elements/scanner_view.png')}
                style={styles.reactLogo}
            />
            <Text>{scanned}</Text>
            <Text>{barcode}</Text>
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
               
                snapPoints={snapPoints}>

                <BottomSheetView style={styles.contentContainer}>
                    <BottomSheetTextInput
                        value={inputBarcode}
                        style={{ backgroundColor: '#FCE4B6', height: 40, width: '90%', padding: '10px', borderColor: '#747474', borderWidth: 1 }}
                        placeholder='Please enter barcode manually'
                        onChangeText={setInputBarcode}
                        onBlur={handleOnBlur}
                    />
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: 'center',
        backgroundColor: "#FAF1E4"
    },
});