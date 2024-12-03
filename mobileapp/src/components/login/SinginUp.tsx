import { useState } from "react";
import { Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { View } from "react-native";
import InTextButton from "../paperUiElement/InTextButton";
import PrimaryButton from "../paperUiElement/PrimaryButton";
import PrivacyPolicyDialog from "./PrivacyPolicyDialog";
import TermsOfService from "./TermsOfService";
import PrimaryInputText from "../paperUiElement/PrimaryInputText"
import { useAuth } from "@/src/context/AuthContext";

const SignUp = ({callback}) => {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleOnSubmit = (event) => {
        //router.replace('/(onBoarding)/language');
    }


    const [visible, setVisible] = useState(false);
    const [visibleTOS, setVisibleTOS] = useState(false);

    const showDialog = () => setVisible(true);
    const showDialogTOS = () => setVisibleTOS(true);

    const hideDialog = () => setVisible(false);
    const hideDialogTOS = () => setVisibleTOS(false);

    
    const { onSigup } = useAuth();

    const onSignUpPress = async () => {
        await onSigup!(email, password);
    };
    return (<>


        <PrimaryInputText label="Email" value={email} onChangeText={setEmail} />
        <PrimaryInputText label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />

        <View style={{ height: 28 }}>

        </View>
        
        <Button mode="contained" onPress={onSignUpPress} theme={{ colors: { onPrimary: '#000000', primary: 'rgba(213,203,68, 0.7)' } }} >
        Sign Up
        </Button>

        <Text variant="labelMedium" style={{ alignSelf: 'center', marginBottom: 50 }}>
            Have an account?
            <InTextButton butonText="Sign in" callback={callback} style={{ alignSelf: 'left' }} />
        </Text>


        <Text variant="bodyMedium" style={{ alignSelf: 'center', marginBottom: 50 }}>
            By signing up, you agree to the
            <InTextButton butonText="Terms of Service" callback={showDialogTOS} /> and
            <InTextButton butonText="Privacy Policy" callback={showDialog} />.

        </Text>

        <TermsOfService visible={visibleTOS} hideDialog={hideDialogTOS} />
        <PrivacyPolicyDialog visible={visible} hideDialog={hideDialog} />


    </>)
}


export default SignUp;