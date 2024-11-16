import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from 'react-native-paper';
import PaperUIChip from '@/src/components/paperUiElement/PaperUIChip'
import PaperUIChipStyle from '@/src/components/paperUiElement/PaperUIChipStyle'

const AllergiesSection = ({ profile, callback }) => {

    const [profileInformation, setProfileInformation] = useState({ ...profile });

    const [selectedAllergies, setSelectedAllergies] = useState(profileInformation.allergies)

    const [allergies, setAllergies] = useState([
        { name: "Eggs", selected: false },
        { name: "Milk", selected: false },
        { name: "Mustard", selected: false },
        { name: "Peanuts", selected: false },
        { name: "Fish", selected: false },
        { name: "Crustaceans and molluscs", selected: false },
        { name: "Sesame seeds", selected: false },
        { name: "Soy", selected: false },
        { name: "Sulphites", selected: false },
        { name: "Tree nuts", selected: false },
        { name: "Wheat and triticale", selected: false }
    ]);

    useEffect(() => {
        callback(profileInformation);
    }, [profileInformation]);

    useEffect(() => {
        setProfileInformation({ ...profileInformation, allergies: selectedAllergies });
        console.log(selectedAllergies)
    }, [selectedAllergies]);

    useEffect(() => {
        console.log(selectedAllergies == undefined)
        if (selectedAllergies == undefined) // no allergies
        {
            setSelectedAllergies(allergies);
        }
    }, []);


    const handleAllergyOnPress = (allergy) => {
        const tempAllergies = [];
        selectedAllergies.forEach((item) => {
            if (item.name == allergy) {
                tempAllergies.push({name:item.name, selected:!item.selected});
            } else {
                tempAllergies.push(item);

            }
        });
        setSelectedAllergies(tempAllergies);
    }

    return (<>
        <Text variant="headlineLarge" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Select Allergy</Text>
        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 10, width: 280 }}>
            {selectedAllergies && selectedAllergies.map((item, index) => {
                return (<>
                    {
                        item.selected? <PaperUIChip key={index} name={item.name} isSelected={true} callback={handleAllergyOnPress} />
                        : 
                        <PaperUIChipStyle key={index} name={item.name} isSelected={false} callback={handleAllergyOnPress} />
                }
                   </>
                )
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