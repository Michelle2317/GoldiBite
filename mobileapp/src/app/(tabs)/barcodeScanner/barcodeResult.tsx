const { GoogleGenerativeAI, SchemaType } = require("@google/generative-ai");
import { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';
import ScanButton from '../../../components/ScanButton';
import barcodeData from '../../../data/barcode.json';
import { useLocalSearchParams } from 'expo-router';

export default function barcodeResult() {
    const { barcode } = useLocalSearchParams<{ barcode: string }>();
    const [item, setItem] = useState({ name: 'test', ingredient: 'test 2', image: '' });
console.log(barcode);
    const [allergyList, setAllergyList] = useState([]);

    useEffect(() => {
        const filtered = barcodeData.filter((item) => item.barcode == barcode);
        setItem(filtered[0])
        GemineAPI(filtered[0]);
    }, [])


    const GemineAPI = async (item) => {
        // Make sure to include these imports:
        // import { GoogleGenerativeAI } from "@google/generative-ai";
        const EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY;


        console.log(EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY)
        const genAI = new GoogleGenerativeAI(EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY);
        const model = genAI.getGenerativeModel(
            {
                model: "gemini-1.5-flash",
                generationConfig: {
                    responseMimeType: "application/json",
                },
            },
        );


        console.log(item)
        const ingredient = item.ingredient;
        const prompt = "Analyze the ingredient I provide, and list the possible allery in the list (eggs, milk, mustard, peanuts, crustaceans and molluscs, fish, sesame seeds, soy, sulphites, tree nuts, wheat and triticale), and highlight all allergy for each category. The ingredient list: " + ingredient


        console.log(prompt);
        const result = await model.generateContent(prompt);
        const res = JSON.parse(result.response.text())
        console.log(result.response.text());
        let allergies = [];
        console.log(typeof(res));
        if (res['eggs'].length > 0) {
            console.log("Eggs")
            console.log(res['eggs'].length)
            const obj = { allergy: "eggs", ingredient: res['eggs'] };
            allergies.push(obj)
        }
        if (res['milk'].length > 0) {
            console.log(res['milk'].length);
            const obj = { allergy: "milk", ingredient: res['milk'] };
            allergies.push(obj)
        }
        if (res['mustard'].length > 0) {
            const obj = { allergy: "mustard", ingredient: res['mustard'] };
            allergies.push(obj)
        }
        if (res['peanuts'].length > 0) {
            const obj = { allergy: "peanuts", ingredient: res['peanuts'] };
            allergies.push(obj)
        }
        if (res['crustaceans and molluscs'].length > 0) {
            const obj = { allergy: "crustaceans and molluscs", ingredient: res['crustaceans and molluscs'] };
            allergies.push(obj)
        }
        if (res['sesame seeds'].length > 0) {
            const obj = { allergy: "sesame seeds", ingredient: res['sesame seeds'] };
            allergies.push(obj)
        }
        if (res['soy'].length > 0) {
            console.log(res['soy'].length);
            const obj = { allergy: "soy", ingredient: res['soy'] };
            allergies.push(obj)
        }
        if (res['sulphites'].length > 0) {
            console.log(res['sulphites'].length);
            const obj = { allergy: "sulphites", ingredient: res['sulphites'] };
            allergies.push(obj)
        }
        if (res['tree nuts'].length > 0) {
            console.log(res['tree nuts'].length);
            const obj = { allergy: "tree nuts", ingredient: res['tree nuts'] };
            allergies.push(obj)
        }
        if (res['wheat and triticale'].length > 0) {
            console.log(res['wheat and triticale'].length);
            const obj = { allergy: "wheat and triticale", ingredient: res['wheat and triticale'] };
            allergies.push(obj)
        }
        setAllergyList(allergies);
        // console.log(`Eggs: ${res['eggs']}`);
        // console.log(`milk: ${res['milk']}`);
        // console.log(`mustard: ${res['mustard']}`);
        // console.log(`peanuts: ${res['peanuts']}`);
        // console.log(`Crustaceans and molluscs: ${res['crustaceans and molluscs']}`);
        // console.log(`sesame seeds: ${res['sesame seeds']}`);
        // console.log(`soy: ${res['soy']}`);
        // console.log(`sulphites: ${res['sulphites']}`);
        // console.log(`tree nuts: ${res['tree nuts']}`);
        // console.log(`wheat and triticale: ${res['wheat and triticale']}`);
    }


    return (<>
        <View style={styles.container}>
            <ScanButton />
            <Text variant="displayMedium">{item['name']}</Text>
            <Image
                source={{
                    uri: item['image']
                }}
                style={{ width: 200, height: 200 }}
            />


            <Card mode='contained' theme={{ colors: { surfaceVariant: '#FCE4B6' } }} >
                <Card.Content style={{ gap: 10 }} >
                    <ScrollView>
                        <View>
                            <Text variant="titleMedium" style={{ color: '#000' }}>Product Name</Text>
                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                {item['name']}
                            </Text>
                        </View>
                        <View>
                            <Text variant="titleMedium" style={{ color: '#000' }}>May Contain Allergy</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '8', color: '#000' }}>
                                {allergyList && allergyList.map((allergy, index) => {
                                    return (<>
                                    <Chip key={index} style={{ backgroundColor: '#FFC858', borderWidth: '1', borderColor: '#F3A405' }} onPress={() => console.log('Pressed')}>{allergy['allergy']}</Chip>
                                    </>)
                                })}

                                
                            </View>
                        </View>
                        <View>
                            <Text variant="titleMedium" style={{ color: '#000' }}>Ingredient List</Text>
                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                {item['ingredient']}
                            </Text>
                        </View>
                    </ScrollView>
                </Card.Content>
            </Card>
        </View>
    </>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
        paddingBottom: 320,
    },
    header: {
        fontSize: 25,
        fontWeight: 'Bold'
    }
}) 