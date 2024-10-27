import { Avatar, Text } from 'react-native-paper';
import { View } from 'react-native';

export default function ScanButton() {
    return (<>
        <View style={{ flex: 1 }}>
            <View style={{ borderWidth: 0, position: 'absolute', top: 200, left: 90, alignSelf: 'flex-end', zIndex: 999, width: 100 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Avatar.Icon size={64} icon="barcode-scan" color='#000000' style={{backgroundColor:'#BFEDDD'}
                
                } />
                    <Text variant="labelMedium" style={{color:'#000000'}}>Scan another </Text>
                    <Text variant="labelMedium" style={{color:'#000000'}}>product</Text>
                </View>
            </View>
        </View>
    </>)
}