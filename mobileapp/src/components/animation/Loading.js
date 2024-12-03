import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-paper'
import LottieView from 'lottie-react-native';


export default function Loading() {
	const screenWidth = Dimensions.get('window').width;
    return (<>
        <View style={styles.container}>
            <LottieView
                source={require('@/assets/images/elements/loading.json')}
                autoPlay
                loop
                style={[
                    {
                        width: screenWidth,
                        height: 150,
                    },
                ]}
                resizeMode='contain'
            />

            <Text variant='labelMedium'>Analysis ...</Text>

        </View>
    </>);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingIcon: {
        flkex: 1,
        width: 50,
        height: 50,
    }
})