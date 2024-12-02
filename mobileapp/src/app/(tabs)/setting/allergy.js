import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image } from "react-native";
import { Text, } from 'react-native-paper';
import PrimaryButton from '../../../components/paperUiElement/PrimaryButton';
import { useRouter } from "expo-router";
import UserStoreDataUtils from "../../../utils/UserStoreDataUtils";
import PaperUIChip from '@/src/components/paperUiElement/PaperUIChip'
import PaperUIChipStyle from '@/src/components/paperUiElement/PaperUIChipStyle'

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

    const handleAllergyOnPress = (allergy) => {
        const tempAllergies = [];
        selectedAllergies.forEach((item) => {
            if (item.name == allergy) {
                tempAllergies.push({ name: item.name, selected: !item.selected });
            } else {
                tempAllergies.push(item);

            }
        });
        setSelectedAllergies(tempAllergies);
    }
    return (<>
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text variant="titleMedium" style={styles.title}>
                    Have a new allergen or selected something wrong, edit below!
                </Text>
                <View style={styles.allergyContainer}>
                    {selectedAllergies && selectedAllergies.map((item, index) => {
                        return item.selected ?
                            (<PaperUIChip key={index} name={item.name} isSelected={true} callback={handleAllergyOnPress} />)
                            :
                            (<PaperUIChipStyle key={index} name={item.name} isSelected={false} callback={handleAllergyOnPress} />)
                    })
                    }
                </View>
            </View>
            <View style={styles.buttonContainer}>
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
    contentContainer: {
        flex: 6,
        display: "flex",
        gap: 10,
    },
    allergyContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonContainer: {
        flex: 1,
        gap: 10,
    },
    title: {
        alignSelf: "center",
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        marginBottom: 10
    }

});

export default allergy;