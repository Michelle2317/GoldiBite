import { StyleSheet, View } from "react-native";
import { Text, Dialog, Portal, IconButton } from "react-native-paper";

export default function EmergencyPopup({ visible, hideDialog, title, body }) {
    return (
        <>
            <Portal>
                <Dialog
                    visible={visible}
                    onDismiss={hideDialog}
                    style={[styles.dialog, visible && styles.dialogVisible]}
                >
                    <View style={styles.titleContainer}>
                        <Dialog.Title>
                            <Text variant="titleMedium" style={styles.title}>{title}</Text>
                        </Dialog.Title>
                        <IconButton
                            icon="close"
                            size={20}
                            onPress={hideDialog}
                            style={styles.closeButton}
                        />
                    </View>
                    <Dialog.Content>
                        <Text variant="bodyMedium">{body}</Text>
                    </Dialog.Content>
                </Dialog>
            </Portal>
        </>
    );
}

const styles = StyleSheet.create({
    dialog: {
        position: "relative",
        borderRadius: 8,
        borderWidth: 2, 
        borderColor: "red", 
    },
    dialogVisible: {
       
    },
    titleContainer: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
    },
    closeButton: {
        position: "absolute",
        top: -20, 
        right: 1, 
        borderRadius: 25, 
        borderWidth: 1,
        borderColor: "black",
        width: 30, 
        height: 30, 
        justifyContent: "center",
        alignItems: "center",
    },
});
