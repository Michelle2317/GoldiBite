import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Image, View, StyleSheet, TextInput } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { BarCodeScanner } from 'expo-barcode-scanner';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useRouter, useNavigation } from 'expo-router';


export default function Scanner(props) {
    const parent = props.navigation;
    const router = useRouter();

    const handleBarCodeScanned = ({ type, data }) => {
        if (data !== null || data !== "") {
            setScanned(true);
            router.push({ pathname: "barcodeScanner/barcodeResult", params: { barcode: data } })
            //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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

    //barcode scanner 
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    return (
        //options={{        tabBarStyle: { display: "none" },    }}
        <View style={styles.container}  >
            <View style={styles.barcodeContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

                <Image
                    source={require('@/assets/images/elements/scanner_view.png')}
                    style={styles.reactLogo}
                />

            </View>
            <BarcodeBottomSheet />
        </View>

    );
}

const BarcodeBottomSheet = () => {
    const router = useRouter();
    const [inputBarcode, setInputBarcode] = useState("");
    // variables
    const snapPoints = useMemo(() => ["100%"], []);
    //ref
    const bottomSheetRef = useRef(null);
    // callbacks 
    const handleSheetChanges = useCallback(index => {
        console.log('handleSheetChanges', index);
    }, [])
    const handleOnBlur = () => {
        router.push({ pathname: "barcodeScanner/barcodeResult", params: { barcode: inputBarcode } })
    }

    return (<>
        <GestureHandlerRootView style={styles.bottomSheetContainer}>
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                enableDynamicSizing={false}
                enableOverDrag={false}
                snapPoints={snapPoints}
                handleStyle={{ backgroundColor: "#FCE4B6", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                handleIndicatorStyle={{ backgroundColor: "unset" }}>

                <BottomSheetView style={styles.bottomSheetStyle}>

                    <BottomSheetTextInput
                        value={inputBarcode}
                        style={{ alignSelf: "center", backgroundColor: '#FCE4B6', height: 40, width: '90%', padding: '10px', borderColor: '#747474', borderWidth: 1 }}
                        placeholder='Please enter barcode manually'
                        onChangeText={setInputBarcode}
                        onBlur={handleOnBlur}
                    />
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        gap: 0,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: "flex-start"
    },
    barcodeContainer: {
        flex: 6,
        padding: 0,
        margin: 0,
    },
    reactLogo: {
        margin: "auto"
    },

    bottomSheetContainer: {
        flex: 1,
        padding: 0,
        flexDirection: "column",
        backgroundColor: "#FAF1E4",
    },
    bottomSheetStyle: {
        flex: 1,
        padding: 0,
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: '#FCE4B6'
    },
});