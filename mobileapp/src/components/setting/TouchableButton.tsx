
import { StyleSheet, TouchableOpacity } from "react-native";
import { Divider, Text, Icon } from 'react-native-paper';
import { useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native';

const TouchableButton = ({ name, target }) => {
    const navigation = useNavigation();
    const handleOnPress = (target) =>{
        navigation.navigate(target);
    }

    return (<>
        <TouchableOpacity style={styles.menu} onPress={() => { handleOnPress(target) }}>
            <Text variant="titleMedium" style={styles.label}>{name}</Text>
            <Icon 
                source="menu-right"
                size={25}
            />
        </TouchableOpacity>
        <Divider style={styles.dividerStyle} />
    </>)
}

const styles = StyleSheet.create({
    label: {
        flex: 2,
        fontWeight: "bold",
    },
    dividerStyle: {
    },
    menu: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
    },
    icon: {
        alignSelf:"flex-end"
    }
});
export default TouchableButton;
