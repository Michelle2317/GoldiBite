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

export default function barcodeResult() {
    const { barcode } = useLocalSearchParams<{ barcode: string }>();
    const [product, setProduct] = useState({
        title: '',
        images: [''],
        barcode_number: '',
        brand: '',
        description: '',
        ingredients: '',
    });
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

    const isLoading = loadingStatus === 'loading';
    const isError = loadingStatus === 'error';
    const productNotFound = loadingStatus === 'productNotFound';

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
                if (productJson.products.length === 0) {
                    return;
                } else {
                    const productData = productJson.products[0];
                    if (!productData.ingredients) return;
                    setProduct(productData);
                    GemineAPI(productData);
                    isFindProduct(true);
                }
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

    const ProductNotfound = () => {
        const onPressHandles = () => {
            router.back();
        };

        return (
            <View style={styles.productNotFoundContainer}>
                <Text variant="headlineMedium" style={{ textAlign: 'center', marginBottom: 30, fontWeight: 'bold' }}>
                    Product Not Found
                </Text>
                <Image
                    source={require('@/assets/images/elements/product_not_found.png')}
                    style={{ width: 190, height: 190, alignSelf: 'center', objectFit: 'contain' }}
                />
                <Text variant="titleMedium" style={{ textAlign: 'center', marginBottom: 30, fontWeight: 'bold', marginHorizontal: 50 }}>
                    We couldn't find any matching products
                </Text>
                <Text variant="labelMedium">{barcode}</Text>
                <PrimaryButton buttonText="Back to Scanner" callback={onPressHandles} />
            </View>
        );
    };

    if (!findProduct) {
        return <ProductNotfound />;
    }

    return (
        <View style={styles.container}>
            <IconButton
                icon="close"
                size={24}
                onPress={() => router.back()}
                style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: colorScheme === 'light' ? '#F4EADA' : '#343434',
                    borderRadius: 50,
                    zIndex: 1,
                }}
            />
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <Text>Error while loading data</Text>
            ) : productNotFound ? (
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
    productNotFoundContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 20,
        gap: 10,
    },
});
