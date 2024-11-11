import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { ProgressBar, Text } from 'react-native-paper';
import PrimaryButton from "../../components/paperUiElement/PrimaryButton";
import PrimaryInputText from "../../components/paperUiElement/PrimaryInputText"
import { Chip } from 'react-native-paper';
import UserStoreDataUtils from "../../utils/UserStoreDataUtils";
import ProfileSection from '../../components/setupAccount/ProfileSection'
import IconSection from '../../components/setupAccount/IconSection'
import EmergencySection from '../../components/setupAccount/EmergencySection'

import { useRouter } from "expo-router";

const SetupAccount = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const totalStep = 4
    const [process, setProcess] = useState(1)
    const [profile, setProfile] = useState({});
    const { getProfile, storeProfile, removeProfile } = UserStoreDataUtils();;


    useEffect(() => {

        const getProfileData = async () => {
            let storeData = await getProfile();
            setProfile(storeData);
        }
        getProfileData();
    }, []);
    const onButtonPressHandles = () => {

    }

    const handleBackBtn = () => {
        if (step == 1) return;
        setStep(step - 1);
        setProcess((step - 1) / totalStep);
    }
    const handleNextBtn = () => {
        if (step == 4) router.replace('/(setup)/welcome');; // router to anther path
        setStep(step + 1);
        setProcess((step + 1) / totalStep);
    }

    const updataPofile = async (data) => {
        await storeProfile(JSON.stringify(data));
        // storeData(getKey(), JSON.stringify(store.profile ))

        let storeData = await getProfile();
        setProfile(storeData);
    }
    return (<>
        <View style={styles.container}>

            <View style={styles.processBarContainer}>
                <ProgressBar progress={(step / totalStep)} color="#00C9A2" style={{ backgroundColor: '#FFC858' }} />
            </View>

            <View style={{ display: "flex", height: 500 }}>
                {
                    (step == 1) && <IconSection profile={profile} callback={updataPofile}  />
                }
                {
                    (step == 2) && <ProfileSection profile={profile} callback={updataPofile} />
                }
                {
                    (step == 3) && <AllergiesSection />
                }
                {
                    (step == 4) && <EmergencySection profile={profile} callback={updataPofile}  />
                }
            </View>



            <View style={styles.buttonContainer}>
                {/* Button Container */}
                <PrimaryButton buttonText={"Back"} callback={handleBackBtn} type="secondary" styles={{ alignSelf: "flex-start", display: "flex" }} />
                <PrimaryButton buttonText={"Next"} callback={handleNextBtn} styles={{ alignSelf: "flex-end" }} />
            </View>

        </View>

    </>)
}

const AllergiesSection = () => {

    const [allergies, setAllergies] = useState([
        "Eggs", "Milk", "Mustard", "Peanuts",
        "Fish", "Crustaceans and molluscs", "Sesame seeds", "Soy", "Sulphites", "Tree nuts", "Wheat and triticale"
    ]);
    return (<>
        <Text variant="headlineLarge" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Select Allergy</Text>
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 10, width: 280 }}>
            {allergies && allergies.map((item, index) => {
                return (<>
                    <Chip key={index} theme={{ colors: { secondaryContainer: '#FFC858' } }}
                        mode='flat'
                        onPress={() => console.log('Pressed')}
                        selected={index % 2}>
                        {item}
                    </Chip>
                </>)
            })
            }
        </View>
    </>)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "space-evenly"
        //justifyContent: "center",

    },
    processBarContainer: {
        width: 280,
        height: 20,
        borderRadius: 15,
        padding: 0,
        margin: 0
    },
    questionContainer: {
        width: 280,
        flex: 1,
        display: "flex",
        height: 300,
        gap: 10,
    },
    questionSelectorContainer: {
        flex: 1,
        flexDirection: 'row',
        display: "flex",
        gap: 10,
        height: 300,
        flexWrap: 1
    },
    buttonContainer: {
        width: 280,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    allergyContainer: {
        flex: 0,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        flexWrap: "wrap",
    }
});
export default SetupAccount;