import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Text } from 'react-native-paper';

const IconSection = ({ profile, callback }) => {
    const [profileInformation, setProfileInformation] = useState({ ...profile });
    const [isCallCallback, setIsCallCallback] = useState(false);

    const [icons, setIcons] = useState(
        [
            {
                name: 'icon',
                value: 'user_icon1.png',
                selected: true,
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

        let iconList = [];
        icons.map(icon => {
            if (icon.name == name && icon.value == value) {
                iconList.push({ name: icon.name, value: icon.value, selected: true, source: icon.source })
                setIsCallCallback(true)
                setProfileInformation({ ...profileInformation, icon: icon });
            } else {
                iconList.push({ name: icon.name, value: icon.value, selected: false, source: icon.source })
            }
        })
        setIcons(iconList)
    }


    useEffect(() => {
        const selectedIcon = profileInformation.icon;
        console.log(selectedIcon)
        let iconList = [];
        if(selectedIcon != undefined){

            icons.map(icon => {
                if (selectedIcon == undefined) {
                    iconList.push({ name: icon.name, value: icon.value, selected: false, source: icon.source })
                } else if (icon.name == selectedIcon.name && icon.value == selectedIcon.value) {
                    iconList.push({ name: icon.name, value: icon.value, selected: true, source: icon.source })
                    setIsCallCallback(true)
                    setIsCallCallback(true)
                } else {
                    iconList.push({ name: icon.name, value: icon.value, selected: false, source: icon.source })
                }
            })
            setIcons(iconList);
        }else{

        }
    }, []);

    useEffect(() => {
        if (isCallCallback) callback(profileInformation);
    }, [profileInformation]);

    return (<>

        {/* Questionnaire View */}
        <Text variant="headlineMedium" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Select an Icon</Text>
        <View style={styles.questionSelectorContainer}>
            {icons && icons.map((icon, index) => {
                let borderColor = icon.selected ? '#ffffff' : 'transparent';
                return (
                    <TouchableHighlight key={index} onPress={(element) => { handleOnPress(element, icon.name, icon.value) }} underlayColor="transparent">
                        <Image
                            source={icon.source}
                            style={{ width: 80, height: 80, borderWidth: 5, borderRadius: 40, borderColor: borderColor }}
                        />
                    </TouchableHighlight>
                )

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