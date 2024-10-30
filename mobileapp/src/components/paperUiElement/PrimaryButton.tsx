import {Button} from "react-native-paper";

const PrimaryButton = ({buttonText, callback}) => {
    const handleOnSubmit = () => {
        callback();
    }
    return (<>

        <Button mode="contained" onPress={handleOnSubmit} theme={{ colors: { onPrimary: '#000000', primary: 'rgba(213,203,68, 0.7)' } }} >
            {buttonText}
        </Button>
    </>)
}
export default PrimaryButton