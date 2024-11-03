import React, { useState } from 'react';

import { View, StyleSheet, Image } from "react-native";
import { Text, } from 'react-native-paper';
import PrimaryInputText from '../../../components/paperUiElement/PrimaryInputText';
import { Dropdown } from 'react-native-paper-dropdown';
import PrimaryButton from '../../../components/paperUiElement/PrimaryButton';
import { useRouter } from "expo-router";
const ProfileView = () => {
    const router = useRouter();

    const [nickname, setNickname] = useState('Kaylic Sanchez');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('21');


    const OPTIONS = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ];

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
                <Text variant="bodyMedium" style={{ alignSelf: "center", marginBottom:80 }}>kayliecca113@gmail.com</Text>

                <View style={styles.questionContainer}>
                    <PrimaryInputText label="Nickname" value={nickname} onChangeText={setNickname} />
                    <PrimaryInputText label="Age" value={age} onChangeText={setAge}   />
                    <Dropdown
                            label="Gender"
                            placeholder="Select Gender"
                            options={OPTIONS}
                            value={gender}
                            onSelect={setGender}
                            menuContentStyle={{ backgroundColor: "#FCE4B6" }}
                            hideMenuHeader={true}
                        />

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

export default ProfileView;