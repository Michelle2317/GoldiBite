import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Image, View, StyleSheet, TextInput } from "react-native";
import { Button, Text } from "react-native-paper";
import { CameraView } from 'expo-camera';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import ProductUtils from '@/src/utils/ProductUtils';
import { useTheme } from '@/src/hooks/useTheme';

export default function Scanner(props) {
    const parent = props.navigation;
    const router = useRouter();
    const getProduct = ProductUtils();

    const handleBarCodeScanned = ({ type, data }) => {
        if (data !== null || data !== "") {
            setScanned(false);
            const product = getProduct(data);
            if (!product[0]) {
                //router.push({ pathname: "barcodeScanner/productNotfound" })
                router.push({ pathname: "barcodeScanner/barcodeResult", params: { barcode: data } })
            } else {
                router.push({ pathname: "barcodeScanner/barcodeResult", params: { barcode: data } })
            }
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
            const { status } = await Camera.requestPermissionsAsync();
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
        if (barcode == "") return;
        const product = getProduct(barcode);
        if (!product[0]) {
            router.push({ pathname: "barcodeScanner/productNotfound" })
        } else {
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
                <CameraView
                    barcodeScannerSettings={{
                        barcodeTypes: ["aztec", 'ean13', 'ean8', 'qr', 'pdf417', 'upc_e', 'datamatrix', 'code39', 'code93', 'itf14', 'codabar', 'code128', 'upc_a'],
                    }}
                    onBarcodeScanned={handleBarCodeScanned}
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

    const { colorScheme } = useTheme();
    const backgroundColor = colorScheme === 'light' ? '#FFCB62' : '#000000';
    const borderColor = colorScheme === 'light' ? '#747474' :  '#F3A405'
    const inputColor = colorScheme === 'light' ? '#FFCB62' :  '#fff'
    return (<>
        <GestureHandlerRootView style={{
            flex: 1,
            padding: 0,
            flexDirection: "column",
            backgroundColor: backgroundColor
        }}>
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                enableDynamicSizing={false}
                enableOverDrag={false}
                snapPoints={snapPoints}
                handleStyle={{ backgroundColor: backgroundColor, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                handleIndicatorStyle={{ backgroundColor: "unset" }}>

                <BottomSheetView style={{
                     flex: 1,
                     padding: 0,
                     flexDirection: 'column',
                     alignContent: 'center',
                     backgroundColor: backgroundColor
                }}>

                    <BottomSheetTextInput
                        value={inputBarcode}
                        style={{ alignSelf: "center", backgroundColor: backgroundColor, height: 40, width: '90%', padding: '10px', borderColor: borderColor, borderWidth: 1, color:inputColor }}
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

    },
    bottomSheetStyle: {
        flex: 1,
        padding: 0,
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: '#FFCB62'
    },
});