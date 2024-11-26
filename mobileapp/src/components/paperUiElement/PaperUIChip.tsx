import { useTheme } from '@react-navigation/native';
import {Chip} from "react-native-paper";

export default function PaperUIChip({name, isSelected, callback}){
    const { colors } = useTheme();
     
     const color = colors.mode=="dark"?isSelected ? "#000000" : '#494949': isSelected ? '#FFC858' : '#FCE4B6'
     const textStyle = colors.mode=="dark"?isSelected ? "#FFCB62" : '#ffffff': isSelected ? '#000000' : '#000000'
     const handleCallBack = (e) => {
        callback(name)
     }
    return (<>
        <Chip theme={{ colors: { secondaryContainer: color } }}
        textStyle={{color:textStyle, fontWeight:'bold'}}
        mode='flat' showSelectedCheck={false}
        onPress={handleCallBack}
        selected={isSelected}>
        {name}
    </Chip>
    </>)
}