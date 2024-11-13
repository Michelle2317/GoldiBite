import { useTheme } from '@react-navigation/native';
import {Chip} from "react-native-paper";

export default function PaperUIChip({name, isSelected, callback}){
    const { colors } = useTheme();

     const color = colors.mode=="dark"?isSelected ? "#E4E3DF" : '#000000': isSelected ? '#FFC858' : '#FCE4B6'
     const textStyle = colors.mode=="dark"?isSelected ? "#000000" : '#E4E3DF': isSelected ? '#000000' : '#000000'
     const handleCallBack = (e) => {
        callback(e, name)
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