import { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import PrimaryButton from "../../components/paperUiElement/PrimaryButton";
import { ProgressBar, Text} from 'react-native-paper';
import { useRouter } from "expo-router";

const welcome = () => {
    const router = useRouter();

    return (<>
        <View style={styles.container}>
        <Text variant="displayLarge" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Welcome!</Text>
            <Image
                source={require('@/assets/images/elements/goldibiteLogo.png')}
                style={{ width: 188, height: 188, alignSelf: "center", marginBottom: 50 }}
            />
            <Text variant="headlineMedium" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Yay, you’re finally here!</Text>
            <Text variant="titleLarge" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>You are all set!</Text>
            <PrimaryButton buttonText="Let's get started" callback={()=>{ router.replace('/(tabs)/'); }} />
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        gap: 10
    }
});

export default welcome;