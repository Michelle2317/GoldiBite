import { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import SignUp from '../../components/login/SinginUp';
import LoginForm from '../../components/login/LoginForm';

export default function Login() {
    const [inProcess, setProcess] = useState('login');

    const handleOnPress = (processing) => {
        setProcess(processing)
    }

    return (<>
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/elements/text-logo.png')}
                style={{ width: 277, height: 47.45, alignSelf: "center", marginBottom: 50 }}
            />
            {inProcess == "login" ? <LoginForm callback={()=>handleOnPress('signup')} /> : <SignUp callback={()=>handleOnPress('login')}/>}
     
        </View>
    </>)
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "flex-start",
        padding: 20,
        paddingTop:180,
        gap: 10
    }
});