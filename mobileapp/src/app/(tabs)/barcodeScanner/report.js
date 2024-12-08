import { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';
import PrimaryInputText from '@/src/components/paperUiElement/PrimaryInputText'

export default function Report() {
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [problem, setProblem] = useState('')

    const LANGUAGE_PROBLEM = [
        { value: '1', label: 'Incorrect Information ' },
        { value: '2', label: 'Image not match' },
        { value: '3', label: 'Allergy not match' },
        { value: '4', label: 'Other Problem' },
    ]
    return (<>

        <View style={styles.container}>

            <Text variant="titleMedium">Reprot Product : {product.title}</Text>
            <View>
                <Image
                    source={{
                        uri: product.image
                    }}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <View>
                <PrimaryInputText label="Title" value={title} onChangeText={setTitle} />
                <PaperUIDropdown label="Problem" placeholder="Select Problem" option={LANGUAGE_PROBLEM} value={problem} callback={setProblem} />
                <PrimaryInputText label="Title" value={detail} onChangeText={setDetail} />
            </View>
        </View>
    </>)

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
        paddingBottom: 320,
    },
    productNotFoundContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 20,
        gap: 10,
    },
    header: {
        fontSize: 25,
        fontWeight: 'Bold'
    }
}) 