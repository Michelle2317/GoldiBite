import { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import ScanButton from '../../../components/ScanButton';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import PrimaryButton from '@/src/components/paperUiElement/PrimaryButton';
import Loading from '../../../components/animation/Loading';
import UserStoreDataUtils from '@/src/utils/UserStoreDataUtils';
import CheckMark from '@/src/components/barcodeScanner/CheckMark';
import GoogleGemine from '@/src/utils/GoogleGemine';
import AllengyAnalysisUtils from '@/src/utils/AllengyAnalysisUtils';
import PaperUIChipStyle from '@/src/components/paperUiElement/PaperUIChipStyle';
import { useTheme } from '@/src/hooks/useTheme';
import ProductNotfound from './productNotfound';
import EmergencyPopup from '@/src/components/EmergencyPopup'; // Importing EmergencyPopup

export default function barcodeResult() {
    const { barcode } = useLocalSearchParams<{ barcode: string }>();
    const [product, setProduct] = useState({ title: '', images: [''], barcode_number: '', brand: '', description: '', ingredients: '' });
    const [allergyList, setAllergyList] = useState([]);
    const router = useRouter();
    const { checkAllergy } = AllengyAnalysisUtils();
    const [loadingStatus, setLoadingStatus] = useState('idle');
    const [isSafity, setIsSafity] = useState(true);
    const [findProduct, isFindProduct] = useState(false);
    const { getProfile } = UserStoreDataUtils();
    const { productGemineAPI } = GoogleGemine();
    const { colorScheme } = useTheme();
    const backgroundColor = colorScheme === 'light' ? '#F4EADA' : '#343434';

    const popupTitle = 'Notice';
    const popupBody = 'Scanner disclaimer info will be here.';
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        const barcodelookupAPI = async (barcode: string) => {
            const API_KEY = process.env.EXPO_PUBLIC_BARCODELOOKUP_API_KEY;
            const URL = `${process.env.EXPO_PUBLIC_BARCODELOOKUP_URL}barcode=${barcode}&formatted=y&key=${API_KEY}`;
            try {
                const response = await fetch(URL);
                if (response.status !== 200) {
                    setLoadingStatus('productNotFound');
                    return;
                }
                const productJson = await response.json();
                if (productJson.products.length === 0) return;
                if (!productJson.products[0].ingredients) return;
                setProduct(productJson.products[0]);
                GemineAPI(productJson.products[0]);
                isFindProduct(true);
            } catch (e) {
                setLoadingStatus('error');
                console.error(e);
            }
        };

        barcodelookupAPI(barcode || '');
    }, [barcode]);

    const GemineAPI = async (item: any) => {
        try {
            setLoadingStatus('loading');
            const res = await productGemineAPI(item.ingredients);
            setAllergyList(res['allergens']);
            const profile = await getProfile();
            const safity = checkAllergy(profile.allergies, res['allergens']);
            setIsSafity(safity);
            setLoadingStatus('idle');
        } catch (e) {
            setLoadingStatus('error');
            console.error(e);
        }
    };

    if (!findProduct) return <ProductNotfound />;

    return (
        <View style={styles.container}>
            <IconButton
                icon="information"
                size={24}
                onPress={() => setIsPopupVisible(true)}
                style={styles.iconButton}
                mode="contained"
            />
            {isPopupVisible && (
                <EmergencyPopup
                    title={popupTitle}
                    body={popupBody}
                    onClose={() => setIsPopupVisible(false)}
                />
            )}
            {loadingStatus === 'loading' ? (
                <Loading />
            ) : loadingStatus === 'error' ? (
                <Text>Error while loading data</Text>
            ) : loadingStatus === 'productNotFound' ? (
                <ProductNotfound />
            ) : (
                <>
                    <ScanButton />
                    <Text variant="titleMedium">{product.title}</Text>
                    <View>
                        <Image
                            source={{
                                uri: product.images[0],
                            }}
                            style={{ width: 200, height: 200 }}
                        />
                        <CheckMark safity={isSafity} />
                    </View>
                    <Card mode="contained" theme={{ colors: { surfaceVariant: backgroundColor } }}>
                        <Card.Content style={{ gap: 10 }}>
                            <ScrollView style={{ gap: 10 }}>
                                <View>
                                    <Text variant="labelMedium" style={{ fontWeight: 'bold' }}>Product Name</Text>
                                    <Text variant="bodyMedium">{product.title}</Text>
                                </View>
                                <View>
                                    <Text variant="labelMedium" style={{ fontWeight: 'bold' }}>Barcode</Text>
                                    <Text variant="bodyMedium">{product.barcode_number}</Text>
                                </View>
                                <View>
                                    <Text variant="labelMedium" style={{ fontWeight: 'bold' }}>Brand</Text>
                                    <Text variant="bodyMedium">{product.brand}</Text>
                                </View>
                                <View>
                                    <Text variant="labelMedium" style={{ fontWeight: 'bold' }}>Description</Text>
                                    <Text variant="bodyMedium">{product.description}</Text>
                                </View>
                                <View>
                                    <Text variant="labelMedium" style={{ fontWeight: 'bold' }}>May Contain Allergy</Text>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                                        {allergyList.map((allergy, index) => (
                                            <PaperUIChipStyle key={index} name={allergy.allergen} isSelected={true} />
                                        ))}
                                    </View>
                                </View>
                                <View>
                                    <Text variant="labelMedium" style={{ fontWeight: 'bold' }}>Ingredient List</Text>
                                    <Text variant="bodyMedium">{product.ingredients}</Text>
                                </View>
                            </ScrollView>
                        </Card.Content>
                    </Card>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
        paddingBottom: 320,
    },
    iconButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#e0e0e0',
    },
});
