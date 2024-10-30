import { TextInput } from "react-native-paper";
import { useState } from "react";
const PrimaryInputText = ({ label, value, onChangeText, secureTextEntry = false }) => {

    const [isShowText, setShowText] = useState(!secureTextEntry);

    const onChangeHandle = (text) => {
        onChangeText(text);
    }

    const onPressIcon = () => {
        console.log(isShowText)
        setShowText(!isShowText)
    }
    if (!secureTextEntry) {
        return (<>

            <TextInput
                label={label}
                value={value}
                onChangeText={onChangeHandle}
                mode="flat"
                theme={{ colors: { surfaceVariant: '#FCE4B6' } }}
                underlineStyle={{ borderColor: "#F3A405" }}
            />
        </>)
    } else {
        return (<>
            <TextInput
                label={label}
                value={value}
                secureTextEntry={!isShowText}
                onChangeText={onChangeHandle}
                mode="flat"
                theme={{ colors: { surfaceVariant: '#FCE4B6' } }}
                underlineStyle={{ borderColor: "#F3A405" }}
                right={isShowText ? <TextInput.Icon icon="eye-off" onPress={onPressIcon} /> : <TextInput.Icon icon="eye" onPress={onPressIcon} />}
            />
        </>)

    }
}

export default PrimaryInputText;