import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';
import AddCartButton from '../../../components/barcodeScanner/AddCartButton';

export default function menuScannerResultDetail() {

    return (<>
        <View style={styles.container}>
            <AddCartButton />
            <Text variant="displayMedium">Krabmeat Alfredo</Text>
            <Card mode='contained' theme={{colors:{surfaceVariant:'#FCE4B6'}}} >
                <Card.Content style={{ gap: 10 }} >
                    <ScrollView>
                        <View>
                            <Text variant="titleMedium" style={{color: '#000'}}>Product Name</Text>
                            <Text variant="bodyMedium" style={{color: '#000'}}>
                            Krabmeat Alfredo
                            </Text>
                        </View>
                        <View>
                            <Text variant="titleMedium"  style={{color: '#000'}}>Many Contain Allergy</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '8' , color: '#000' }}>
                                <Chip style={{ backgroundColor: '#FFC858', borderWidth: '1', borderColor: '#F3A405' }} onPress={() => console.log('Pressed')}>Dairy</Chip>
                                <Chip style={{ backgroundColor: '#FFC858', borderWidth: '1', borderColor: '#F3A405' }} onPress={() => console.log('Pressed')}>Gluten</Chip>
                                <Chip style={{ backgroundColor: '#FFC858', borderWidth: '1', borderColor: '#F3A405' }} onPress={() => console.log('Pressed')}>Nuts</Chip>
                            </View>
                        </View>
                        <View>
                            <Text variant="titleMedium" style={{color: '#000'}}>Ingredient List</Text>
                            <Text variant="bodyMedium" style={{color: '#000'}}>
                                corn, vegetable oil (sunflower, canola, and/or corn oil), maltodextrin (made from corn), and less than 2% of the following: salt, cheddar cheese (milk, cheese cultures, salt, enzymes), whey, monosodium glutamate, buttermilk, romano cheese (part-skim cow's milk, cheese cultures, salt, enzymes), romano cheese (cow's milk, cheese cultures, salt, enzymes), whey protein concentrate, onion powder, corn flour, natural and artificial flavor, dextrose, tomato powder, lactose, spices, artificial color (yellow 6, yellow 5, red 40), lactic acid, citric acid, sugar, garlic powder, skim milk, red and green bell pepper powder, disodium inosinate, disodium guanylate, potassium chloride, and sodium caseinate.
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