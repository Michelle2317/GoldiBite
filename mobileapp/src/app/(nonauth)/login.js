import { useState } from "react";
import { View } from "react-native";
import { TextInput,Avatar, Button, Card, Text } from "react-native-paper";
import {  useRouter } from "expo-router";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const router = useRouter(); 

    const handleOnSubmit = (event) => {

router.replace('/(onBoarding)/language');
    }
    return (<>
        <View
            style={{
                flex: 1,
                margin: 16,
            }}
        >

            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            /> 
            <Button   mode="contained" onPress={handleOnSubmit}>
                Login
              </Button>

              
<Button  mode="contained" onPress={() => console.log('Pressed')}>
    Sign up
  </Button>
        </View>
    </>)
}