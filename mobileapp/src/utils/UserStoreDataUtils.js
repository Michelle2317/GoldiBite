import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/AuthContext';

export default function UserStoreDataUtils() {
    const { authState } = useAuth();

    const getProfileId = () => {
        if (authState.username != null) {
            const key = `profile_${authState.username}`
            //console.log(`key: ${key}`)
            return key;
        } else {
            return '';
        }
    }

    const getProfile = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(getProfileId())
            //console.log(`line20 on UserStoreDataUtils.js: jsonValue: ${jsonValue}`);
            const json = JSON.parse(jsonValue)
            //console.log(`line22 on UserStoreDataUtils.js: ${json}`);
            return json;
        } catch (e) {
            console.error(e.message)
            // error reading value
        }
    };

    const storeProfile = async (value) => {
        try {
            await AsyncStorage.setItem(getProfileId(), value);
        } catch (error) {
            console.error(e.message)
        }
    }

    const removeProfile = async () => {
        try {
            await AsyncStorage.removeItem(getProfileId());
        } catch (error) {
            console.error(e.message)
        }
    }

    const getProfileName = async () => {
        try {
            const profile = await getProfile(); 
            console.log(profile.username);
            //return '';
            return profile.username;
        } catch (error) {
            console.error(e.message)
        }
    }

    return { getProfile, storeProfile, removeProfile, getProfileName}
}