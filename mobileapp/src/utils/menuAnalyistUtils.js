import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/AuthContext';

export default function menuAnalyistUtils() {
    const { authState } = useAuth();

    const getProfileId = () => {
        if (authState.username != null) {
            const key = `menuAnalyist_${authState.id}`
            //console.log(`key: ${key}`)
            return key;
        } else {
            return '';
        }
    }

    const getImageBase64 = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(getProfileId())
           //const json = JSON.parse(jsonValue)
            return jsonValue;
        } catch (e) {
            console.error(e.message)
            // error reading value
        }
    };

    const storeImageBase64 = async (value) => {
        try {
            await AsyncStorage.setItem(getProfileId(), value);
        } catch (error) {
            console.error(e.message)
        }
    }


    return { getImageBase64, storeImageBase64}
}