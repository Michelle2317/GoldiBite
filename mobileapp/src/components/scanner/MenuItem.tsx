import React, { useState } from "react";
import { View, StyleSheet } from "react-native"
import { Checkbox, Button, Card, Text, IconButton, Icon } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { useRouter } from 'expo-router';



const MenuItem = ({ checked = false, name1, isDetected, bgColor = "red" }) => {
    console.log(isDetected)
    const [content, setContent] = useState("");



    const router = useRouter();
    const handleOnPress = () => {
        router.push({ pathname: "barcodeScanner/menuScannerResultDetail" });
    }

    const AllergenWarning = ({ isDetected }) => {
        if (isDetected == true) {
            return (<>
                <Text> Allergen detected </Text>

                <Avatar.Icon size={24} icon="close" color="#FFF" theme={{ colors: { primary: "#D25409" } }} />
            </>);
        } else {
            return (
                <>
                    <Text>Allergen not detected </Text>
                    <Avatar.Icon size={24} icon="check" color="#FFF" theme={{ colors: { primary: "#284722" } }} />

                </>);
        }
    }

    return (<>
        <Card style={styles.cardContainer, { marginBottom: 10, backgroundColor: bgColor }}  >
            <Card.Content>
                <View style={styles.viewContainer}>
                    <View>

                        <Text variant="labelMedium" style={{ fontWeight: "bold" }}>Name</Text>
                        <Text variant="bodyMedium">{name1} (中文名稱)</Text>
                        <Text variant="labelMedium" style={{ fontWeight: "bold" }}>Possible Ingredient: </Text>
                        <Text variant="bodyMedium">Chicken, panko bread crumbs, soy sauce, salt, peeper, rice</Text>
                        <Text variant="labelMedium" style={{ fontWeight: "bold" }}>{AllergenWarning(isDetected)}</Text>
                        <Text variant="bodyMedium">
                        <Icon source="egg" size={20} />
                        <Icon source="egg" size={20} />
                        <Icon source="egg" size={20} />
                        <Icon source="egg" size={20} />
                        </Text>


                    </View>
                </View>
            </Card.Content>
        </Card>
    </>)
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
    },

    viewContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
    }
})

export default MenuItem;