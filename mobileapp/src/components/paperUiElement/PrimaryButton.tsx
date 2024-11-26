import {Button} from "react-native-paper";
import { useTheme } from '@react-navigation/native';

const PrimaryButton = ({buttonText, callback, type="primary", styles}) => {

    
  const { colors } = useTheme();

    const handleOnSubmit = () => {
        callback();
    }
   
   const primaryTheme =  colors.mode=="dark"?{ colors: { onPrimary: '#000000', primary: '#D5CB44' } }:{ colors: { onPrimary: '#000000', primary: 'rgba(213,203,68, 0.7)' } };
    const secondaryTheme = colors.mode=="dark"? { colors: { onPrimary: '#D5CB44', primary: '#000000' } }:{ colors: { onPrimary: '#000000', primary: '#F5F5F5' } };
    return (<> 
        <Button mode="contained" onPress={handleOnSubmit} theme={ (type=="primary"?primaryTheme:secondaryTheme)} style={styles} >
            {buttonText}
        </Button>
    </>)
}
export default PrimaryButton