import {Button} from "react-native-paper";

const PrimaryButton = ({buttonText, callback, type="primary", styles}) => {
    const handleOnSubmit = () => {
        callback();
    }
    const primaryTheme = { colors: { onPrimary: '#000000', primary: 'rgba(213,203,68, 0.7)' } };
    const secondaryTheme = { colors: { onPrimary: '#000000', primary: '#F5F5F5' } };
    return (<>
        <Button mode="contained" onPress={handleOnSubmit} theme={ (type=="primary"?primaryTheme:secondaryTheme)} style={styles} >
            {buttonText}
        </Button>
    </>)
}
export default PrimaryButton