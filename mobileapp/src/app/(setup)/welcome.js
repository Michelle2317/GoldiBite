import { useState, useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import PrimaryButton from "../../components/paperUiElement/PrimaryButton";
import { ProgressBar, Text } from 'react-native-paper';
import { useRouter } from "expo-router";
import UserStoreDataUtils from '../../utils/UserStoreDataUtils';


const welcome = () => {
    const router = useRouter();
    const { getProfileName } = UserStoreDataUtils();
    const [name, setName] = useState('');

	useEffect(() => {
		const getUsername = async () => {
			const username = await getProfileName();
			setName(username);
		};
		getUsername();
	}, []);

    return (<>
        <View style={styles.container}>
            <Text variant="displayMedium" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>You Are All Set!</Text>
            <Image
                source={require('@/assets/images/elements/user_icon1.png')}
                style={{ width: 188, height: 188, alignSelf: "center", marginBottom: 10 }}
            />
            <Text variant="displaySmall" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>{name}</Text>
            <PrimaryButton buttonText="Let's get started" callback={() => { router.replace('/(tabs)/'); }} />
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
    }
});

export default welcome;
