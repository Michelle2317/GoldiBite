import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Image } from "react-native";
import { Text, } from 'react-native-paper';
import PrimaryButton from '../../../components/paperUiElement/PrimaryButton';
import { Chip } from 'react-native-paper';
import { useRouter } from "expo-router";

const allergy = () => {
    const router = useRouter();

    const [nickname, setNickname] = useState('Kaylic Sanchez');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('21');


    const [allergies, setAllergies] = useState([
        "Eggs", "Milk", "Mustard", "Peanuts",
        "Fish", "Crustaceans and molluscs", "Sesame seeds", "Soy", "Sulphites", "Tree nuts", "Wheat and triticale"
    ]);
    const handleBackBtn = () => {
        //router.replace('/(tabs)/setting/Home')
        router.back();
    }
    return (<>
        <View style={styles.container}>
            <View style={styles.profileContainer}>

                <Image
                    source={require('@/assets/images/elements/user_icon1.png')}
                    style={{ width: 130, height: 130, alignSelf: "center" }}
                />
                <Text variant="titleMedium" style={{ alignSelf: "center" }}>Kaylie1333</Text>
                <Text variant="bodyMedium" style={{ alignSelf: "center", marginBottom: 80 }}>kayliecca113@gmail.com</Text>

                <View style={styles.questionContainer}>
                    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 20, width: 280 }}>

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
                    <PrimaryButton buttonText="Save" callback={handleBackBtn} />
                </View>
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