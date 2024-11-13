import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Text } from 'react-native-paper';
import UserStoreDataUtils from "../../utils/UserStoreDataUtils";

const IconSection = ({ profile, callback }) => {
    const [profileInformation, setProfileInformation] = useState({ ...profile });
    const [isCallCallback, setIsCallCallback] = useState(false);
    const { getProfile, storeProfile, getProfileIcon } = UserStoreDataUtils();

    const [icons, setIcons] = useState(
        [
            {
                name: 'icon',
                value: 'user_icon1.png',
                selected: false,
                source: require('@/assets/images/elements/user_icon1.png'),
            },
            {
                name: 'icon',
                value: 'user_icon2.png',
                selected: false,
                source: require('@/assets/images/elements/user_icon2.png'),
            },
            {
                name: 'icon',
                value: 'user_icon3.png',
                selected: false,
                source: require('@/assets/images/elements/user_icon3.png')
            }]);
    const handleOnPress = (element, name, value) => {
        const profile = getProfile();
        let iconList = [];
        icons.map(icon => {
            if (icon.name == name && icon.value == value) {
                console.log(icon.source)
                iconList.push({ name: icon.name, value: icon.value, selected: true, source: icon.source })
                setIsCallCallback(true)
                setProfileInformation({ ...profile, icon: icon });
            } else {
                console.log(icon.source)
                iconList.push({ name: icon.name, value: icon.value, selected: false, source: icon.source })
            }
        })
        setIcons(iconList)
    }


    useEffect(() => {
        const getProfileData = async () => {
            let storeData = await getProfileIcon();
            setProfileInformation(storeData);

            console.log('45' + storeData.name)
            console.log('45' + storeData.value)
            console.log('45' + storeData.source)
            let iconList = [];
            icons.map(icon => {
                if (storeData == undefined) {
                    iconList.push({ name: icon.name, value: icon.value, selected: false, source: icon.source })
                } else if (icon.name == storeData.name && icon.value == storeData.value) {
                    iconList.push({ name: icon.name, value: icon.value, selected: true, source: icon.source })
                    setIsCallCallback(true)
                } else {
                    iconList.push({ name: icon.name, value: icon.value, selected: false, source: icon.source })
                }
            })
            setIcons(iconList);
        }
        getProfileData();


    }, []);

    useEffect(() => {
        if (isCallCallback) callback(profileInformation);
    }, [profileInformation]);

    return (<>

        {/* Questionnaire View */}
        <Text variant="headlineLarge" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Select an Icon</Text>
        <View style={styles.questionSelectorContainer}>
            {icons && icons.map((icon, index) => {
                let borderColor = icon.selected ? '#ffffff' : 'transparent';
                return (<>
                    <TouchableHighlight key={index} onPress={(element) => { handleOnPress(element, icon.name, icon.value) }} underlayColor="transparent">
                        <Image key={index}
                            source={icon.source}
                            style={{ width: 80, height: 80, borderWidth: 5, borderRadius: '50%', borderColor: borderColor }}
                        />
                    </TouchableHighlight>
                </>)

            })}

        </View>
    </>)
}


const styles = StyleSheet.create({

    questionSelectorContainer: {
        flex: 1,
        flexDirection: 'row',
        display: "flex",
        gap: 10,
        height: 300,
    }
});

export default IconSection;