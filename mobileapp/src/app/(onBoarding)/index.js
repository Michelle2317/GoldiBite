import { View, StyleSheet, Image, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import LottieView from 'lottie-react-native';


export default function App() {

	const screenWidth = Dimensions.get('window').width;
    const screenHight = Dimensions.get('window').height;
    
    const router = useRouter();
useEffect(()=>{

    const timer = setTimeout(()=>{
        console.log('timeout')
        router.replace('/(onBoarding)/language');
    }, 5000)

    return ()=>clearTimeout(timer);

}, []);

    return (<>
        <View style={styles.container}>
            
        <LottieView
                source={require('@/assets/images/elements/opening-animation.json')}
                autoPlay={true}
                loop={false}
                style={[
                    {
                        width: screenWidth,
                        height: screenHight,
                    },
                ]}
                resizeMode='contain'
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