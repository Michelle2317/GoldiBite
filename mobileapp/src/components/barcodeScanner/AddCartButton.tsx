import { Avatar, Text } from 'react-native-paper';
import { View } from 'react-native';

export default function AddCartButton() {
    return (<>
        <View style={{ flex: 1 }}>
            <View style={{ borderWidth: 0, position: 'absolute', top: 200, left: 90, alignSelf: 'flex-end', zIndex: 999, width: 100 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Avatar.Icon size={64} icon="plus" color='#000000' style={{backgroundColor:'#BFEDDD'}
                
                } />
                    <Text variant="labelMedium" style={{color:'#000000'}}>Add to </Text>
                    <Text variant="labelMedium" style={{color:'#000000'}}>Order List</Text>
                </View>
            </View>
        </View>
    </>)
}