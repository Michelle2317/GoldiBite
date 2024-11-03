
import { StyleSheet, TouchableOpacity } from "react-native";
import { Divider, Text, Icon } from 'react-native-paper';
import { useRouter } from "expo-router";
const TouchableButton = ({ name, target }) => {
    const router = useRouter();''
    const handleOnPress = (name) =>{
        router.replace(target);
    }

    return (<>
        <TouchableOpacity style={styles.menu} onPress={() => { handleOnPress("profile") }}>
            <Text variant="titleLarge" style={styles.itemText}>{name}</Text>
            <Icon 
                source="menu-right"
                size={25}
            />
        </TouchableOpacity>
        <Divider style={styles.dividerStyle} />
    </>)
}

const styles = StyleSheet.create({
    itemText: {
        flex: 2,
        height: 30,
    },
    dividerStyle: {
    },
    menu: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        alignSelf:"flex-end"
    }
});
export default TouchableButton;
