import { StyleSheet } from "react-native";
import { Button, Text, Dialog, Portal } from "react-native-paper";
import PrimaryButton from './paperUiElement/PrimaryButton';

export default function EmergencyPopup({ visible, hideDialog, title, body }) {
    return (
        <>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>
                        <Text variant="titleMedium" style={styles.title}>{title}</Text>
                    </Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">{body}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <PrimaryButton buttonText="close" callback={hideDialog} />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 50,
        marginTop: 10,
        marginBottom: 10,
        width: '60%',
    },
});
