import { useState } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";
import InTextButton from "../paperUiElement/InTextButton";
import PrimaryButton from "../paperUiElement/PrimaryButton";
import PrivacyPolicyDialog from "./PrivacyPolicyDialog";
import PrimaryInputText from "../paperUiElement/PrimaryInputText"

const SignUp = ({ callback }) => {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleOnSubmit = (event) => {
        //router.replace('/(onBoarding)/language');
    }


    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    return (<>

        
<PrimaryInputText label="Email" value={email} onChangeText={setEmail} />
        <PrimaryInputText label="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />

        <PrimaryButton buttonText="Sign Up" callback={handleOnSubmit} />

        <Text variant="labelMedium" style={{ alignSelf: 'center', marginBottom: 50 }}>
           Have an account?
            <InTextButton butonText="Sign in" callback={callback} style={{ alignSelf: 'left' }}  />
        </Text>


        <Text variant="bodyMedium" style={{ alignSelf: 'center', marginBottom: 50 }}>
            By signing up, you agree to the
            <InTextButton butonText="Terms of Service" callback={showDialog} /> and
            <InTextButton butonText="Privacy Policy" callback={showDialog} />, including
            <InTextButton butonText="Terms of Service" callback={showDialog} />.

        </Text>

        <PrivacyPolicyDialog visible={visible} hideDialog={hideDialog} />


    </>)
}


export default SignUp;