import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView, Text, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import menuAnalyistUtils from '@/src/utils/menuAnalyistUtils'
import Loading from '../../../components/animation/Loading';
import ItemList from '../../../components/scanner/ItemList';
import GoogleGemine from "@/src/utils/GoogleGemine";
import AllengyAnalysisUtils from '@/src/utils/AllengyAnalysisUtils';
import UserStoreDataUtils from '@/src/utils/UserStoreDataUtils';

const menuScannerResult = () => {

    const { image } = useLocalSearchParams(image);
    const [status, setStatue] = useState('idle');

    const isLoading = status === 'loading';

    const isError = status === 'error';
    const { getImageBase64, storeImageBase64 } = menuAnalyistUtils();

    const [dishes, setDishes] = useState([]);
    const [categories, setCategories] = useState([]);
    const { menuGemineAPI } = GoogleGemine();
    const { getProfile } = UserStoreDataUtils();
    const { checkMenuAllergy } = AllengyAnalysisUtils();

    const [profile, setProfile] = useState({});
    useEffect(() => {

        const callGetProfile = async () => {
            const user = await getProfile();
            setProfile(user);
        }

        const GemineAPI = async () => {
            // Make sure to include these imports:
            // import { GoogleGenerativeAI } from "@google/generative-ai";
            try {
                setStatue('loading')

                let iData = await getImageBase64();

                const res = await menuGemineAPI(iData, "gemini-1.5-pro");

                console.log(res)
                res.dishes.forEach(dish => {
                    setDishes(data => [...data, dish]);
                    if (categories.indexOf(dish.EnglishCategory) == -1) setCategories(data => [...data, dish.EnglishCategory])
                });

                console.log(dishes)
                console.log(categories)

                console.log('end')
                setStatue('idle')

            } catch (e) {
                setStatue('error')
                console.error(e.message)
            }
        }
        callGetProfile();
        GemineAPI()
    }, []);

    return (<>
        <View style={styles.container}>

            {isLoading ? <Loading />
                : isError ? <Text>Error while loading data</Text>
                    : (<>
                        <Image style={styles.photoPreview} source={{ uri: image }} />
                        {/* <View style={styles.categoryContainer}>
                            <Chip theme={{ colors: { secondaryContainer: '#FFC858' } }} mode='flat' onPress={() => console.log('Pressed')} selected={true}> All </Chip>
                            {categories.map((item, index) => {
                                return (
                                    <Chip key={index} theme={{ colors: { secondaryContainer: '#FFC858' } }} mode='flat' onPress={() => console.log('Pressed')} selected={true}> {item} </Chip>
                                )
                            })}
                        </View> */}

                        <ScrollView style={{ flex: 1 }}>
                            {dishes.map((dish, index) => {
                                console.log(dish);
                                let isSafity = checkMenuAllergy(profile.allergies, dish.allergens);
                                dish.safity = isSafity;
                                return (
                                    <ItemList key={index} dish={dish} safity={isSafity} alertAllergies={profile.allergies} />
                                )
                            })}

                        </ScrollView>
                    </>
                    )
            }
        </View>
    </>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    categoryContainer: {
        flex: 1,
        margin: 16,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 50
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 22,
    },
});


export default menuScannerResult;