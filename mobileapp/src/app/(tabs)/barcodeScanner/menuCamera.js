import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as MediaLibrary from 'expo-media-library';
import {  useRouter  } from 'expo-router';


export default function menuCamera() {
    // @ts-ignore
    const cameraRef = useRef();
    const [permission, requestPermission] = useCameraPermissions();
    // @ts-ignore
    const [photo, setPhoto] = useState();
    const [hasMediaLibraryPermissions, setMediaLibraryPermissions] = useState();
  

    const router = useRouter();
    useEffect(() => {
        async function getMediaPermissions() {
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            // @ts-ignore
            setMediaLibraryPermissions(mediaLibraryPermission.status === "granted");
        }
        getMediaPermissions();
    }, [permission, cameraRef])

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const takePicture = async () => {
        try {
            const options = { quality: 1, base64: true };
            const data = await  cameraRef.current.takePictureAsync(options);
            setPhoto(data);
        } catch (error) {
            console.log(error, "ERROR <<<<<<<<<<<<<")
        }
    };
    // Assume we have a photo
    if (photo) {

        
        const handleOnPress = () => {
            router.push({ pathname: "barcodeScanner/menuScannerResult", params: { image: photo.uri }  })
            setPhoto(undefined);
        }

     
        return (
            <SafeAreaView style={styles.container}>
                {/* <Image style={styles.photoPreview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} /> */}
                <Image style={styles.photoPreview} source={{ uri: photo.uri }} />
                {hasMediaLibraryPermissions ? <Button title="Use It" onPress={handleOnPress} /> : undefined}
                <Button title="Retake" onPress={() => setPhoto(undefined)} />
            </SafeAreaView>
        )
    }

    return (

        <View style={styles.container}  >
            <View style={styles.barcodeContainer}>
                <CameraView
                    style={StyleSheet.absoluteFillObject}
                    ref={cameraRef}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}></TouchableOpacity>
                </View>
            </View>
            <View style={{
                backgroundColor: '#ffffff', flex: 1,
                padding: 0,
                margin: 0,
                alignContent: "center",
                alignItems: "center"
            }}>
                <IconButton
                    icon="circle-slice-8"
                    size={70}
                    onPress={takePicture}

                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    barcodeContainer: {
        flex: 5,
        padding: 0,
        margin: 0,
    },
    reactLogo: {
        margin: "auto"
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    photoPreview: {
      alignSelf: 'stretch',
      flex: 1
    }
});