import { ScrollView } from 'react-native';
import { Button, Text, Dialog, Portal, } from "react-native-paper";

export default function PrivacyPolicyDialog({visible, hideDialog}){
    return (<>
    <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} style={{height:600}}>
                <Dialog.Title> 
                    <Text variant="titleMedium">Privacy Policy</Text>
                    </Dialog.Title>
                <Dialog.ScrollArea>
                    <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
                        <Text variant="bodyMedium" style={{ marginBottom: 20 }}>
                            Last updated October 25, 2024
                        </Text>
                        <Text variant="bodyMedium">
                            This privacy notice for GoldiBite (doing business as GoldiBite) (“Company,” “we,” “us,” or “our“), describes how and why we might collect, store, use, and/or share (“process“) your information when you use our services (“Services“), such as when you:
                        </Text>
                        <Text variant="bodyMedium">
                            Visit our website at Goldibite, or any website of ours that links to this privacy notice. </Text>
                        <Text variant="bodyMedium">
                            [Download and use our application(s), such as our mobile application — GoldiBite, or any other application of ours that links to this privacy notice]
                        </Text>
                        <Text variant="bodyMedium">
                            Engage with us in other related ways ― including any sales, marketing, or events
                        </Text>
                        <Text variant="bodyMedium">
                            Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at goldibite@gmail.com
                        </Text>
                    </ScrollView>
                </Dialog.ScrollArea>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Accept</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    </>)
}