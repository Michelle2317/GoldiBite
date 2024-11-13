import { Dropdown } from 'react-native-paper-dropdown';
import { useTheme } from '@react-navigation/native';

export default function PaperUIDropDownList({option, value, callback, label, placeholder}){
    const { colors } = useTheme();

    const backgroundColor = colors.mode=="dark"?"#000000":"#FCE4B6";
    const onChangeHandle = (text) => {
        callback(text);
    }
    return (<>
    <Dropdown
                        label={label}
                        placeholder={placeholder}
                        options={option}
                        value={value}
                        onSelect={onChangeHandle}
                        hideMenuHeader={true}
                        menuContentStyle={{ backgroundColor: backgroundColor }}
                    />
                    </>)
}