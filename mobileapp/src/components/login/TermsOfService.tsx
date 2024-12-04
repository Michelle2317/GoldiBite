import { ScrollView } from 'react-native';
import { Button, Text, Dialog, Portal, } from "react-native-paper";

export default function PrivacyPolicyDialog({visible, hideDialog}){
    return (<>
    <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} style={{height:600}}>
                <Dialog.Title> 
                    <Text variant="titleMedium">Terms of Service</Text>
                    </Dialog.Title>
                <Dialog.ScrollArea>
                    <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
                        <Text variant="bodyMedium" style={{ marginBottom: 20 }}>
                            Last updated October 25, 2024
                        </Text>
                        <Text variant="bodyMedium">
                        By using GoldiBite’s services, including our website and applications, you acknowledge and agree that GoldiBite (the “Company,” “we,” “us,” or “our”) is not liable for any damages, losses, or issues that may arise from your use of the services. While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, reliability, or accuracy of the content provided. The information available through GoldiBite’s services may contain inaccuracies or errors and should not be fully relied upon. You use our services at your own risk, and GoldiBite is not responsible for any consequences arising from such inaccuracies or omissions, including any third-party content linked or shared through the platform. 
                        </Text>
                        <Text variant="bodyMedium">
                        Questions or concerns? Reading these Terms of Service will help you understand your rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at goldibite@gmail.com
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