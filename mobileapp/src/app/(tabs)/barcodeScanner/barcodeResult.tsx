import { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';
import ScanButton from '../../../components/ScanButton';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import PrimaryButton from '@/src/components/paperUiElement/PrimaryButton'
import Loading from '../../../components/animation/Loading';
import UserStoreDataUtils from '@/src/utils/UserStoreDataUtils';
import CheckMark from '@/src/components/barcodeScanner/CheckMark';
import GoogleGemine from '@/src/utils/GoogleGemine';

export default function barcodeResult() {
    const { barcode } = useLocalSearchParams<{ barcode: string }>();
    const [product, setProduct] = useState({ title: '', images: [""], barcode_number: '', brand: '', description: '', ingredients: '' });
    const [allergyList, setAllergyList] = useState([]);
    const router = useRouter();

    const [loadingStatus, setLoadingStatus] = useState('idle');

    const isLoading = loadingStatus === 'loading';
    const isError = loadingStatus === 'error';
    const [isSafity, setIsSafity] = useState(true);

    const [findProduct, isFindProduct] = useState(false);

    const { getProfile } = UserStoreDataUtils();

    const { productGemineAPI } = GoogleGemine();

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
            //console.log(URL)
            //const response = await fetch(URL);
            const response = `{"products":[{"age_group":"","asin":"B08W5GT544","barcode_formats":"UPC-A 060410047095, EAN-13 0060410047095","barcode_number":"060410047095","brand":"Lay's","category":"Food, Beverages & Tobacco","color":"","description":"220gm.","energy_efficiency_class":"","format":"","gender":"","height":"","images":["https://images.barcodelookup.com/30713/307136367-1.jpg","https://images.barcodelookup.com/30713/307136367-2.jpg"],"ingredients":"Specially Selected Potatoes, Vegetable Oil, Seasoning (modified Milk Ingredients, Salt, Corn Maltodextrin, Cheddar Cheese Solids, Vegetable Oil, Potassium Chloride, Glucose Solids, Dextrose, Yeast Extract, Sour Cream Solids, Dehydrated Onion, Natural Flavour, Citric Acid, Lactic Acid, Dehydrated Garlic, Colour, Calcium Lactate). Contains Milk Ingredients. Gluten-free. Ingrédients: Pommes De Terre Spécialement Sélectionnées, Huile Végétale, Assaisonnement (ingrédients Laitiers Modifiés, Sel, Maltodextrine De Maïs, Matière Sèche Du Fromage Cheddar, Huile Vegetale, Chlorure De Potassium, Matière Sèche De De Creme Sure, Oignon Déshydraté, Arôme Naturel, Glucose, Dextrose, Extrait De Levure, Matière Sèche Acide Citrique, Acide Lactique, Ail Déshydrate, Colorant, Lactate De Calcium). Contient Des Ingrédients Du Lait. Sans Gluten. Guaranteed Fresh/fraîcheur Garantie Until Printed Date Or This Snack Is On Us. Jusqu'à La Date Imprimée Ou Argent Remis. Consumer Relations/relations Avec Les Consommateurs 1 800 376-2257 Weekdays 10:00 Am To 5:30 Pm Eastern Time En Semaine, De 10 H à 17 H 30, Heure Normale De L'est Made In Canada From Domestic Fahri","last_update":"2024-10-09 02:01:53","length":"","manufacturer":"N/a","material":"","model":"","mpn":"","multipack":"","nutrition_facts":"Energy 556 kcal, Fat 34 g, Saturated Fat 4 g, Carbohydrates 52 g, Sugars 2 g, Protein 6 g, Salt 1.7 g.","pattern":"","release_date":"","size":"","title":"Lay's Wavy Cheddar & Sour Cream Potato Chips","weight":"0.4875 lb","width":""}]}`;
            console.log(response)
            // const productJson = await response.json()
            const productJson = JSON.parse(response);
            //console.log(json)
            //const productJson = { "products": [{ "age_group": "", "asin": "B08W5GT544", "barcode_formats": "UPC-A 060410047095, EAN-13 0060410047095", "barcode_number": "060410047095", "brand": "Lay's", "category": "Food, Beverages & Tobacco", "color": "", "contributors": [Array], "description": "220gm.", "energy_efficiency_class": "", "features": [Array], "format": "", "gender": "", "height": "", "images": ["https://images.barcodelookup.com/30713/307136367-1.jpg","https://images.barcodelookup.com/30713/307136367-2.jpg"], "ingredients": "Specially Selected Potatoes, Vegetable Oil, Seasoning (modified Milk Ingredients, Salt, Corn Maltodextrin, Cheddar Cheese Solids, Vegetable Oil, Potassium Chloride, Glucose Solids, Dextrose, Yeast Extract, Sour Cream Solids, Dehydrated Onion, Natural Flavour, Citric Acid, Lactic Acid, Dehydrated Garlic, Colour, Calcium Lactate). Contains Milk Ingredients. Gluten-free. Ingrédients: Pommes De Terre Spécialement Sélectionnées, Huile Végétale, Assaisonnement (ingrédients Laitiers Modifiés, Sel, Maltodextrine De Maïs, Matière Sèche Du Fromage Cheddar, Huile Vegetale, Chlorure De Potassium, Matière Sèche De De Creme Sure, Oignon Déshydraté, Arôme Naturel, Glucose, Dextrose, Extrait De Levure, Matière Sèche Acide Citrique, Acide Lactique, Ail Déshydrate, Colorant, Lactate De Calcium). Contient Des Ingrédients Du Lait. Sans Gluten. Guaranteed Fresh/fraîcheur Garantie Until Printed Date Or This Snack Is On Us. Jusqu'à La Date Imprimée Ou Argent Remis. Consumer Relations/relations Avec Les Consommateurs 1 800 376-2257 Weekdays 10:00 Am To 5:30 Pm Eastern Time En Semaine, De 10 H à 17 H 30, Heure Normale De L'est Made In Canada From Domestic Fahri", "last_update": "2024-10-09 02:01:53", "length": "", "manufacturer": "N/a", "material": "", "model": "", "mpn": "", "multipack": "", "nutrition_facts": "Energy 556 kcal, Fat 34 g, Saturated Fat 4 g, Carbohydrates 52 g, Sugars 2 g, Protein 6 g, Salt 1.7 g.", "pattern": "", "release_date": "", "reviews": [Array], "size": "", "stores": [Array], "title": "Lay's Wavy Cheddar & Sour Cream Potato Chips", "weight": "0.4875 lb", "width": "" }] };
            //const   productJson =  JSON.parse(await response.json()) //await response.json();
            console.log(productJson)
            setProduct(productJson.products[0])


            GemineAPI(productJson.products[0]);

            isFindProduct(true)
        } catch (e) {
            setLoadingStatus('error');
            console.error(e)
        }
    }

    const checkAllergy = async (allergies) => {
        try {
            let profile = await getProfile();
            allergies.map((item) => {

                console.log(item);
                console.log(profile.allergies
                    .filter((allergyItem) => allergyItem.selected == true)
                    .filter((allergiesItem) => (allergiesItem.name.toUpperCase() == item.allergen.toUpperCase())))

                if (profile.allergies
                    .filter((allergyItem) => allergyItem.selected == true)
                    .filter((allergiesItem) => (allergiesItem.name.toUpperCase() == item.allergen.toUpperCase()))
                    .length > 0) {
                    setIsSafity(false);
                    console.log("Not safity.")
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    const GemineAPI = async (item) => {
        try {
            setLoadingStatus('loading');
            setIsSafity(true)
            const res = await productGemineAPI(item.ingredients)
            setAllergyList(res['allergens']);
            checkAllergy(res['allergens']);
            setLoadingStatus('idle');
        } catch (e) {
            setLoadingStatus('error');
            console.error(e)
        }
    }

    const ProductNotfound = () => {
        const onPressHandles = () => {
            router.back();
        }
        return (<>
            <View style={styles.productNotFoundContainer}>
                <Text variant='headlineMedium' style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold' }}>Product Not found</Text>

                <Image
                    source={require('@/assets/images/elements/product_not_found.png')}
                    style={{ width: 190, height: 190, alignSelf: 'center', objectFit: 'contain' }}
                />
                <Text variant="titleMedium" style={{ textAlign: "center", marginBottom: 30, fontWeight: 'bold', marginLeft: 50, marginRight: 50 }}>We couldn't find any matching products</Text>
                <PrimaryButton buttonText={"Back to Scanner"} callback={onPressHandles} />

            </View>
        </>)
    }

    if (!findProduct) {
        return <ProductNotfound />
    } else {
        return (<>
            <View style={styles.container}>

                {isLoading ? <Loading />
                    : isError ? <Text>Error while loading data</Text>
                        : (<>
                            <ScanButton />
                            <Text variant="titleMedium">{product.title}</Text>
                            <View>
                                <Image
                                    source={{
                                        uri: product.images[0]
                                    }}
                                    style={{ width: 200, height: 200 }}
                                />
                                <CheckMark safity={isSafity} />
                            </View>
                            <Card mode='contained' theme={{ colors: { surfaceVariant: '#FCE4B6' } }} >
                                <Card.Content style={{ gap: 10 }} >
                                    <ScrollView>
                                        <View>
                                            <Text variant="labelMedium" style={{ color: '#000', fontWeight: 'bold' }}>Product Name</Text>
                                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                                {/* {item['name']} */}
                                                {product.title}
                                            </Text>
                                        </View>


                                        <View>
                                            <Text variant="labelMedium" style={{ color: '#000', fontWeight: 'bold' }}>Barcode</Text>
                                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                                {product.barcode_number}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text variant="labelMedium" style={{ color: '#000', fontWeight: 'bold' }}>Brand</Text>
                                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                                {product.brand}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text variant="labelMedium" style={{ color: '#000', fontWeight: 'bold' }}>Description</Text>
                                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                                {product.description}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text variant="labelMedium" style={{ color: '#000', fontWeight: 'bold' }}>May Contain Allergy</Text>
                                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '8', color: '#000' }}>
                                                {allergyList && allergyList.map((allergy, index) => {
                                                    return (
                                                        <Chip key={index} style={{ backgroundColor: '#FFC858', borderWidth: '1', borderColor: '#F3A405' }} onPress={() => console.log('Pressed')}>{allergy['allergen']}</Chip>
                                                    )
                                                })}


                                            </View>
                                        </View>
                                        <View>
                                            <Text variant="labelMedium" style={{ color: '#000', fontWeight: 'bold' }}>Ingredient List</Text>
                                            <Text variant="bodyMedium" style={{ color: '#000' }}>
                                                {product.ingredients}
                                            </Text>
                                        </View>
                                    </ScrollView>
                                </Card.Content>
                            </Card>
                        </>)
                }
            </View>
        </>);
    }
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
        justifyContent: 'space-around',
        padding: 20,
        gap: 10,
    },
    header: {
        fontSize: 25,
        fontWeight: 'Bold'
    }
}) 