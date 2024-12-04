import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SosButton from '@/src/components/SosButton';
import { IconButton } from 'react-native-paper';
import EmergencyPopup from '@/src/components/EmergencyPopup';

export default function Emergency() {
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const popupTitle = "Why Do We Have This Option?";
    const popupBody = `Our Call option provides immediate assistance in emergency situations, including sudden medical incidents like strokes. When clicked, the button connects users with emergency services, dialing the appropriate number based on their location (e.g., 911 in the United States). Additionally, an emergency notification is sent to emergency contacts, ensuring they are alerted in real time.`;

    return (
        <View style={styles.centerContainer}>
            <IconButton
                icon='information-outline'
                size={35}
                onPress={showDialog}
                color='black'
                style={styles.informationButton}
            />
            <SosButton />
            <EmergencyPopup 
                visible={visible} 
                hideDialog={hideDialog} 
                title={popupTitle} 
                body={popupBody} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    informationButton: {
        position: 'absolute',
        top: -15,
        right: 15,
    },
});
