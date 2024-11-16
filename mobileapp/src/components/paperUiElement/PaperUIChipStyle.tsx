import { useTheme } from '@react-navigation/native';
import {Chip} from "react-native-paper";

export default function PaperUIChipStyle({name, isSelected, callback}){
    const { colors } = useTheme();

     const color = colors.mode=="dark"? '#000000':'#FCE4B6'
     const textStyle = colors.mode=="dark"? '#E4E3DF': '#000000'
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