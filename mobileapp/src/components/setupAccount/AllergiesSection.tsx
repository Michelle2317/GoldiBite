import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from 'react-native-paper';
import PaperUIChip from '@/src/components/paperUiElement/PaperUIChip'

const AllergiesSection = ({ profile, callback }) => {

    const [profileInformation, setProfileInformation] = useState({ ...profile });

    const [selectedAllergies, setSelectedAllergies] = useState(profileInformation.allergies)

    const [allergies, setAllergies] = useState([
        "Eggs", "Milk", "Mustard", "Peanuts",
        "Fish", "Crustaceans and molluscs", "Sesame seeds", "Soy", "Sulphites", "Tree nuts", "Wheat and triticale"
    ]);

    useEffect(() => {
        callback(profileInformation);
    }, [profileInformation]);

    useEffect(() => {
        setProfileInformation({ ...profileInformation, allergies: selectedAllergies });
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
        <Text variant="headlineLarge" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Select Allergy</Text>
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 10, width: 280 }}>
            {allergies && allergies.map((item, index) => {
                const selected = selectedAllergies && selectedAllergies.indexOf(item) >= 0;
                return (<>
                    <PaperUIChip name={item} isSelected={selected} callback={handleAllergyOnPress} />
                </>)
            })
            }
        </View>
    </>)

}

const styles = StyleSheet.create({
   
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
        height: 300
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
        gap: 10,
        flexWrap: "wrap",
    }
});
export default AllergiesSection;