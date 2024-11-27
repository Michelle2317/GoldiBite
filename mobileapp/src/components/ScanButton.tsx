import { Avatar, Text } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ScanButton() {
    const router = useRouter();
    const onPress = () => {
        router.back();
    }
    return (<>
        <View style={{ flex: 1 }}>
            <View style={{ borderWidth: 0, position: 'absolute', top: 200, left: 90, alignSelf: 'flex-end', zIndex: 999, width: 100 }}>
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }} onPress={onPress}>
                    <Avatar.Icon size={64} icon="barcode-scan" color='#000000' style={{ backgroundColor: '#BFEDDD' }

                    } />
                    <Text variant="labelMedium">Scan another </Text>
                    <Text variant="labelMedium">product</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>)
}