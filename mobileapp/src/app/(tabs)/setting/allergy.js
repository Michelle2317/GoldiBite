import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image } from "react-native";
import { Text, } from 'react-native-paper';
import PrimaryButton from '../../../components/paperUiElement/PrimaryButton';
import { Chip } from 'react-native-paper';
import { useRouter } from "expo-router";
import UserStoreDataUtils from "../../../utils/UserStoreDataUtils";

const allergy = () => {
    const router = useRouter();
    const { getProfile, storeProfile } = UserStoreDataUtils();
    const [profile, setProfile] = useState({});
    const [selectedAllergies, setSelectedAllergies] = useState([])

    const [allergies, setAllergies] = useState([
        "Eggs", "Milk", "Mustard", "Peanuts",
        "Fish", "Crustaceans and molluscs", "Sesame seeds", "Soy", "Sulphites", "Tree nuts", "Wheat and triticale"
    ]);

    useEffect(() => {
        const getProfileData = async () => {
            let storeData = await getProfile();
            setProfile(storeData);
            setSelectedAllergies(storeData.allergies)
        }
        getProfileData();
    }, []);


    const handleBackBtn = () => {
        const storeData = async () => {

            await storeProfile(JSON.stringify(profile));
        }
        storeData()
        router.back();
    }

    useEffect(() => {
        setProfile({ ...profile, allergies: selectedAllergies });
    }, [selectedAllergies]);

    const handleAllergyOnPress = (e, allergy) => {
        if (!selectedAllergies) {
            setSelectedAllergies([allergy])
        } else if (selectedAllergies.indexOf(allergy) >= 0) { //remove the item
            setSelectedAllergies(selectedAllergies.filter((item) => item != allergy))
        } else {
            setSelectedAllergies([...selectedAllergies, allergy])
        }
    }
    return (<>
        <View style={styles.container}>

               
                <Text variant="titleMedium" style={{ alignSelf: "center", paddingLeft:20, paddingRight:20, textAlign:'center', marginBottom:10 }}>
                Have a new allergen or selected something wrong, edit below!
                </Text>

                <View style={styles.questionContainer}>
                    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 10, paddingLeft:20, paddingRight:20 }}>

                        {allergies && allergies.map((item, index) => {
                            const selected = selectedAllergies && selectedAllergies.indexOf(item) >= 0;
                            const color = selected ? '#FFC858' : '#FCE4B6'
                            return (<>
                                <Chip key={index} theme={{ colors: { secondaryContainer: color } }}
                                    mode='flat' showSelectedCheck={false}
                                    onPress={(e) => handleAllergyOnPress(e, item)}
                                    selected={selected}>
                                    {item}
                                </Chip>
                            </>)
                        })
                        }
                    </View>
                    <PrimaryButton buttonText="Save" callback={handleBackBtn} />
                </View>
        </View>
    </>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        padding: 20,
        paddingTop: 50,
        gap: 10,
        flexDirection: 'column',
        alignContent: 'center',
    },
    questionContainer: {
        flex: 0,
        display: "flex",
        gap: 10,
    },

});

export default allergy;