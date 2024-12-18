import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, IconButton, MD3Colors } from "react-native-paper";
import { useRouter } from "expo-router";
import InTextButton from "../paperUiElement/InTextButton"
import PrimaryInputText from "../paperUiElement/PrimaryInputText"
import { useAuth } from "@/src/context/AuthContext";
import SignInWith from './SignInWith'
const LoginForm = ({ callback }) => {
    const router = useRouter();
    const [email, setEmail] = useState('goldibite@my.bcit.ca');
    const [password, setPassword] = useState('123123');

    const { onLogin } = useAuth();

    const onSignInPress = async () => {
        await onLogin!(email, password);
    };
    return (<>
        <PrimaryInputText label="Email" value={email} onChangeText={setEmail} />
        <PrimaryInputText label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
        <View style={{ height: 28 }}>
            <InTextButton butonText=" Forget Password?" callback={() => console.log('Pressed')} style={{ alignSelf: 'self-start' }} />
        </View>
        <Button mode="contained" onPress={onSignInPress} theme={{ colors: { onPrimary: '#000000', primary: 'rgba(213,203,68, 0.7)' } }} >
            Login
        </Button>
        <Text variant="labelMedium" style={{ alignSelf: 'center', marginBottom: 50 }}>
            Don't have an account? <InTextButton butonText="Sign up" callback={callback} /></Text>

        <SignInWith />

        
        <View style={styles.socialMediaLoginContainer}>
            <IconButton
                icon="google"
                iconColor={MD3Colors.error50}
                size={48}
                onPress={() => console.log('Pressed')}
            />
            <IconButton
                icon="facebook"
                iconColor={MD3Colors.error50}
                size={48}
                onPress={() => console.log('Pressed')}

            />
            <IconButton
                icon="apple"
                iconColor={MD3Colors.error50}
                size={48}
                onPress={() => console.log('Pressed')}
            />

        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        gap: 10
    },
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: 'center',
        backgroundColor: "#FAF1E4"
    },
    socialMediaLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    textBoxContainer: {
        width: '100%',
        textAlign: "center",
        borderBottomColor: '#0FF',
        borderWidth: 1,
        lineHeight: 0.1,
        backgroundColor: '#FF0'
    },
    textBox: {
        backgroundColor: 'rgb(250, 241, 228)',
        fontSize: 22, fontWeight: "bold"
    }

});

export default LoginForm;