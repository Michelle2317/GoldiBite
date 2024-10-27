import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Image, View, StyleSheet, TextInput } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { BarCodeScanner } from 'expo-barcode-scanner';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';


export default function Scanner() {

    const router = useRouter();
    // variables
    const snapPoints = useMemo(() => ["20%"], []);


    //ref
    const bottomSheetRef = useRef(null);

    // callbacks 
    const handleSheetChanges = useCallback(index => {
        console.log('handleSheetChanges', index);
    }, [])

    const handleOnChangeInpuptBarcode = (event) => {
        setInputBarcode(event.target.value);
    }

    const handleOnBlur = () => {
        setBarcode(inputBarcode)
    }


    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        setBarcode(data)
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // call barcode scanner
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);


    useEffect(() => {
        if (barcode !== null && barcode !== "") {
          router.push({ pathname: "/barcodeResult", params: { barcode: barcode } })
        }
      }, [barcode])

    // usetState
    const [barcode, setBarcode] = useState("");
    const [inputBarcode, setInputBarcode] = useState("");

    //barcode scanner 
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    return (
        <GestureHandlerRootView style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

            <Image
                source={require('@/assets/images/elements/scanner_view.png')}
                style={styles.reactLogo}
            />
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                styles={{
                    backgroundColor: "#FAF1E4"
                }}
                snapPoints={snapPoints}>

                <BottomSheetView style={styles.contentContainer}>
                    <BottomSheetTextInput
                        value={inputBarcode}
                        style={{ backgroundColor: '#FCE4B6', height: 40, width: '90%', padding: '10px', borderColor: '#747474', borderWidth: 1 }}
                        placeholder='Please enter barcode manually'
                        onChange={handleOnChangeInpuptBarcode}
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