import { Button, Text } from "react-native-paper";

const InTextBtn = ({butonText, callback, style  }) => {
    const onPressHandle = ()=>{
        callback();
    }
    return (<> 

    <Text theme={{colors:{onSurface:'#00C9A2'}}} onPress={onPressHandle}> {butonText} </Text>
   
    </>)
}
export default InTextBtn;

