import React from 'react';
import { View} from "react-native";
import { Text } from "react-native-paper";
import PrimaryButton from '@/src/components/paperUiElement/PrimaryButton';
import { useRouter } from "expo-router";

export default function productNotfound({}){
    const router = useRouter();

    const onPressHandles = () => {
        router.back();
    }
    return (<>
    <View>
        <Text variant='displayMedium'>Product Not found</Text>
        <image></image>
        <Text variant='titleMedium'>We couldn't find any matching products</Text>
        <PrimaryButton buttonText={"Back to Scanner"} callback={onPressHandles} />

    </View>
    </>)
}