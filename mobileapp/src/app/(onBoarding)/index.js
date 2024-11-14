import { View, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";


export default function App() {

    
    const router = useRouter();
useEffect(()=>{

    const timer = setTimeout(()=>{
        console.log('timeout')
        router.replace('/(onBoarding)/language');
    }, 2000)

    return ()=>clearTimeout(timer);

}, []);

    return (<>
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/elements/goldibiteLogo.webp')}
                style={{ width: 300, height: 300 }}
            />
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"

    }
})