import * as React from 'react';
import { View } from 'react-native';
import { Icon, MD3Colors } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

export default function CheckMark({ safity }) {

    const icon = safity ? 'check-bold' : 'close-thick';
    const backgroundColor = safity ? 'green' : 'red';
    const iconColor = safity ? '#fff' : '#fff';
    return (
        <>
            <View  style={{ backgroundColor:backgroundColor, margin:0, borderRadius:32, padding:0, borderWidth: 0, position: 'absolute', top: -25, left: 165, alignSelf: 'flex-end', zIndex: 999 }}>
                <Icon
                    source={icon}
                    size={58} color="#fff"
                />
            </View>
        </>
    );
}