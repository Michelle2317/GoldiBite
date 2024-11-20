const { GoogleGenerativeAI, SchemaType } = require("@google/generative-ai");
import { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';
import ScanButton from '../../../components/ScanButton';
import barcodeData from '../../../data/barcode.json';
import { useLocalSearchParams } from 'expo-router';
import { useRouter, useNavigation } from 'expo-router';

export default function barcodeResult() {
    const { barcode } = useLocalSearchParams<{ barcode: string }>();
    const [item, setItem] = useState({ name: 'test', ingredient: 'test 2', image: '' });
    const [product, setProduct] = useState({title:'', images:[""], barcode_number:'', brand:'', description:'', ingredients:''});
    const [allergyList, setAllergyList] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // const filtered = barcodeData.filter((item) => item.barcode == barcode);
        // if (filtered.length == 0)
        //     router.push({ pathname: "productNotfound" })
        // else {
        //     setItem(filtered[0])
        //     GemineAPI(filtered[0]);
        // }
        //console.log(`line 26: ${barcode}`)
        barcodelookupAPI(barcode);
    }, [])

    const barcodelookupAPI = async (barcode) => {
        const API_KEY = process.env.EXPO_PUBLIC_BARCODELOOKUP_API_KEY;
        const URL = `${process.env.EXPO_PUBLIC_BARCODELOOKUP_URL}barcode=${barcode}&formatted=y&key=${API_KEY}`;

        try {
            console.log(URL)
            //const response = await fetch(URL);
            //console.log(response)
            //           const json = 
            //         console.log(json)
            const productJson = { "products": [{ "age_group": "", "asin": "B08W5GT544", "barcode_formats": "UPC-A 060410047095, EAN-13 0060410047095", "barcode_number": "060410047095", "brand": "Lay's", "category": "Food, Beverages & Tobacco", "color": "", "contributors": [Array], "description": "220gm.", "energy_efficiency_class": "", "features": [Array], "format": "", "gender": "", "height": "", "images": ["https://images.barcodelookup.com/30713/307136367-1.jpg","https://images.barcodelookup.com/30713/307136367-2.jpg"], "ingredients": "Specially Selected Potatoes, Vegetable Oil, Seasoning (modified Milk Ingredients, Salt, Corn Maltodextrin, Cheddar Cheese Solids, Vegetable Oil, Potassium Chloride, Glucose Solids, Dextrose, Yeast Extract, Sour Cream Solids, Dehydrated Onion, Natural Flavour, Citric Acid, Lactic Acid, Dehydrated Garlic, Colour, Calcium Lactate). Contains Milk Ingredients. Gluten-free. Ingrédients: Pommes De Terre Spécialement Sélectionnées, Huile Végétale, Assaisonnement (ingrédients Laitiers Modifiés, Sel, Maltodextrine De Maïs, Matière Sèche Du Fromage Cheddar, Huile Vegetale, Chlorure De Potassium, Matière Sèche De De Creme Sure, Oignon Déshydraté, Arôme Naturel, Glucose, Dextrose, Extrait De Levure, Matière Sèche Acide Citrique, Acide Lactique, Ail Déshydrate, Colorant, Lactate De Calcium). Contient Des Ingrédients Du Lait. Sans Gluten. Guaranteed Fresh/fraîcheur Garantie Until Printed Date Or This Snack Is On Us. Jusqu'à La Date Imprimée Ou Argent Remis. Consumer Relations/relations Avec Les Consommateurs 1 800 376-2257 Weekdays 10:00 Am To 5:30 Pm Eastern Time En Semaine, De 10 H à 17 H 30, Heure Normale De L'est Made In Canada From Domestic Fahri", "last_update": "2024-10-09 02:01:53", "length": "", "manufacturer": "N/a", "material": "", "model": "", "mpn": "", "multipack": "", "nutrition_facts": "Energy 556 kcal, Fat 34 g, Saturated Fat 4 g, Carbohydrates 52 g, Sugars 2 g, Protein 6 g, Salt 1.7 g.", "pattern": "", "release_date": "", "reviews": [Array], "size": "", "stores": [Array], "title": "Lay's Wavy Cheddar & Sour Cream Potato Chips", "weight": "0.4875 lb", "width": "" }] };
            //             JSON.parse(json) //await response.json();
            console.log(productJson)
            setProduct(productJson.products[0])


            GemineAPI(productJson.products[0]);
        } catch (e) {
            console.error(e)
        }


    }

    const GemineAPI = async (item) => {
        // Make sure to include these imports:
        // import { GoogleGenerativeAI } from "@google/generative-ai";
        const EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY;
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
        const ingredient = item.ingredients;
        const prompt = "Analyze the ingredient I provide, and list the possible allery in the list (eggs, milk, mustard, peanuts, crustaceans and molluscs, fish, sesame seeds, soy, sulphites, tree nuts, wheat and triticale), and highlight all allergy for each category. The ingredient list: " + ingredient


        console.log(prompt);
        const result = await model.generateContent(prompt);
        const res = JSON.parse(result.response.text())
        console.log(result.response.text());
        let allergies = [];
        console.log(typeof (res));
        const allergyItem = res.allergens;
        console.log(allergyItem)
        if (allergyItem['eggs'].length > 0) {
            console.log("Eggs")
            console.log(allergyItem['eggs'].length)
            const obj = { allergy: "eggs", ingredient: allergyItem['eggs'] };
            allergies.push(obj)
        }
        if (allergyItem['milk'].length > 0) {
            console.log(allergyItem['milk'].length);
            const obj = { allergy: "milk", ingredient: allergyItem['milk'] };
            allergies.push(obj)
        }
        if (allergyItem['mustard'].length > 0) {
            const obj = { allergy: "mustard", ingredient: allergyItem['mustard'] };
            allergies.push(obj)
        }
        if (allergyItem['peanuts'].length > 0) {
            const obj = { allergy: "peanuts", ingredient: allergyItem['peanuts'] };
            allergies.push(obj)
        }
        if (allergyItem['crustaceans and molluscs'].length > 0) {
            const obj = { allergy: "crustaceans and molluscs", ingredient: allergyItem['crustaceans and molluscs'] };
            allergies.push(obj)
        }
        if (allergyItem['sesame seeds'].length > 0) {
            const obj = { allergy: "sesame seeds", ingredient: allergyItem['sesame seeds'] };
            allergies.push(obj)
        }
        if (allergyItem['soy'].length > 0) {
            console.log(res['soy'].length);
            const obj = { allergy: "soy", ingredient: allergyItem['soy'] };
            allergies.push(obj)
        }
        if (allergyItem['sulphites'].length > 0) {
            console.log(res['sulphites'].length);
            const obj = { allergy: "sulphites", ingredient: allergyItem['sulphites'] };
            allergies.push(obj)
        }
        if (allergyItem['tree nuts'].length > 0) {
            console.log(res['tree nuts'].length);
            const obj = { allergy: "tree nuts", ingredient: allergyItem['tree nuts'] };
            allergies.push(obj)
        }
        if (allergyItem['wheat and triticale'].length > 0) {
            console.log(res['wheat and triticale'].length);
            const obj = { allergy: "wheat and triticale", ingredient: allergyItem['wheat and triticale'] };
            allergies.push(obj)
        }
        setAllergyList(allergies);
        console.log(allergies)
    }


    return (<>
        <View style={styles.container}>
        <ScanButton />
            <Text variant="titleMedium">{product.title}</Text>
            <Image
                source={{
                    uri: product.images[0]
                }}
                style={{ width: 200, height: 200 }}
            />

            <Card mode='contained' theme={{ colors: { surfaceVariant: '#FCE4B6' } }} >
                <Card.Content style={{ gap: 10 }} >
                    <ScrollView>
                        <View>
                            <Text variant="labelMedium" style={{ color: '#000', fontWeight:'bold'  }}>Product Name</Text>
                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                {/* {item['name']} */}
                                {product.title}
                            </Text>
                        </View>
                        
                        
                        <View>
                            <Text variant="labelMedium" style={{ color: '#000', fontWeight:'bold'  }}>Barcode</Text>
                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                { product.barcode_number }
                            </Text>
                        </View>
                        <View>
                            <Text variant="labelMedium" style={{ color: '#000', fontWeight:'bold'  }}>Brand</Text>
                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                { product.brand }
                            </Text>
                        </View>
                        <View>
                            <Text variant="labelMedium" style={{ color: '#000', fontWeight:'bold'  }}>Description</Text>
                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                { product.description }
                            </Text>
                        </View>
                        <View>
                            <Text variant="labelMedium" style={{ color: '#000', fontWeight:'bold'  }}>May Contain Allergy</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '8', color: '#000' }}>
                                {allergyList && allergyList.map((allergy, index) => {
                                    return (
                                        <Chip key={index} style={{ backgroundColor: '#FFC858', borderWidth: '1', borderColor: '#F3A405' }} onPress={() => console.log('Pressed')}>{allergy['allergy']}</Chip>
                                    )
                                })}


                            </View>
                        </View>
                        <View>
                            <Text variant="labelMedium" style={{ color: '#000', fontWeight:'bold' }}>Ingredient List</Text>
                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                { product.ingredients }
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
        marginLeft: 16,
        marginRight: 16,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        alignItems:'center',
        gap: 20,
        paddingBottom: 320,
    },
    header: {
        fontSize: 25,
        fontWeight: 'Bold'
    }
}) 