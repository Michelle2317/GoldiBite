import { TextInput } from "react-native-paper";
import { useState } from "react";
import { useTheme } from '@react-navigation/native';

const PrimaryInputText = ({ label, value, onChangeText, secureTextEntry = false, initialState = 'edit' }) => {
    const { colors } = useTheme();

    const [isShowText, setShowText] = useState(!secureTextEntry);
    const [status, setStatus] = useState(initialState);

    const onChangeHandle = (text) => {
        onChangeText(text);
    }

    const onPressIcon = () => {
        console.log(isShowText)
        setShowText(!isShowText)
    }

    const onPressEditIcon = () => {
        setStatus('label')
    }
    const onPressSaveIcon = () => {
        setStatus('edit')
    }
    if (!secureTextEntry) {
        if (initialState !== 'label') {  //F3A405
            return (<>
                <TextInput
                    label={label}
                    value={value}
                    onChangeText={onChangeHandle}
                    mode="flat"
                    theme={{ colors: colors.mode=="dark"?{surfaceVariant: '#000000' }:{surfaceVariant: '#FCE4B6' } }}
                    underlineStyle={ { borderColor: "#F3A405" }}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </>)
        } else { // can change status
            return (<>
                <TextInput
                    label={label}
                    value={value}
                    onChangeText={onChangeHandle}
                    autoCapitalize='none'
                    autoCorrect={false}
                    disabled={status != 'edit'}
                    mode="flat"
                    theme={{ colors: colors.mode=="dark"?{surfaceVariant: '#000000' }:{surfaceVariant: '#FCE4B6' } }}
                    underlineStyle={{ borderColor: "#F3A405" }}
                    right={status == 'edit' ? <TextInput.Icon icon="content-save" onPress={onPressEditIcon} /> : <TextInput.Icon icon="pencil" onPress={onPressSaveIcon} />}
                />
            </>)
        }
    } else {
        return (<>
            <TextInput
                label={label}
                value={value}
                secureTextEntry={!isShowText}
                onChangeText={onChangeHandle}
                mode="flat"
                    theme={{ colors: colors.mode=="dark"?{surfaceVariant: '#000000' }:{surfaceVariant: '#FCE4B6' } }}
                underlineStyle={{ borderColor: "#F3A405" }}
                right={isShowText ? <TextInput.Icon icon="eye-off" onPress={onPressIcon} /> : <TextInput.Icon icon="eye" onPress={onPressIcon} />}
            />
        </>)

    }
}

export default PrimaryInputText;