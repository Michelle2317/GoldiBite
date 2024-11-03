import { TextInput } from "react-native-paper";
import { useState } from "react";
const PrimaryInputText = ({ label, value, onChangeText, secureTextEntry = false, initialState = 'edit' }) => {

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
        if(initialState !== 'label'){
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
        } else { // can change status
            return (<>
                <TextInput
                    label={label}
                    value={value}
                    onChangeText={onChangeHandle}
                    
                    disabled={status !='edit'}
                    mode="flat"
                    theme={{ colors: { surfaceVariant: '#FCE4B6' } }}
                    underlineStyle={{ borderColor: "#F3A405" }}
                    right={status =='edit' ? <TextInput.Icon icon="content-save" onPress={onPressEditIcon} /> : <TextInput.Icon icon="pencil" onPress={onPressSaveIcon} />}
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
                theme={{ colors: { surfaceVariant: '#FCE4B6' } }}
                underlineStyle={{ borderColor: "#F3A405" }}
                right={isShowText ? <TextInput.Icon icon="eye-off" onPress={onPressIcon} /> : <TextInput.Icon icon="eye" onPress={onPressIcon} />}
            />
        </>)

    }
}

export default PrimaryInputText;