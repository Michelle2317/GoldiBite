import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView, Text, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import menuAnalyistUtils from '@/src/utils/menuAnalyistUtils'
import Loading from '../../../components/animation/Loading';
import ItemList from '../../../components/scanner/ItemList';
import GoogleGemine from "@/src/utils/GoogleGemine";
import AllengyAnalysisUtils from '@/src/utils/AllengyAnalysisUtils';
import UserStoreDataUtils from '@/src/utils/UserStoreDataUtils';
import Chips from '../../../components/barcodeScanner/Chips'; 
import sampleData from '@/src/data/sampleData'
import supabase from '@/src/utils/supabaseClient';  

const menuScannerResult = () => {
    const [image, setImage] =useState();
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
    const [ menuFilter, setMenuFilter] = useState("All");

    const uploadDishesToSupabase = async (dishes) => {
        const { data, error } = await supabase
            .from('dishes')
            .insert(dishes);
    
        if (error) {
            console.error("Error uploading dishes:", error.message);
        } else {
            console.log("Dishes uploaded successfully:", data);
        }
    };
    
    const menuFilterFunction = (item) => {
        if (menuFilter === "All") {
            return true;
        }
        if (menuFilter === "No Allergen" && item.allergens.length === 0) {
            return true;
        }
        if (menuFilter === "May Contain Allergens" && item.allergens.length > 0) {
            return true; 
        }
        return false;
    };

    useEffect(() => {

        const callGetProfile = async () => {
            const user = await getProfile();
            setProfile(user);
        }

    
        const GemineAPI = async () => {
            try {
                setStatue('loading')
    
                let iData = await getImageBase64();
                setImage(iData);
                const res = await menuGemineAPI(iData, "gemini-1.5-pro");
    

                //const res = sampleData;
                //console.log(typeof(res))

                const cate = [];
                const dishData = [];
    
                res.dishes.forEach((dish) => {
                    setDishes((data) => [...data, dish]);
                    if (dish.EnglishCategory === "") {
                        if (cate.indexOf("None") < 0) cate.push("None");
                    } else {
                        if (cate.indexOf(dish.EnglishCategory) < 0) cate.push(dish.EnglishCategory);
                    }
    
                    dishData.push({
                        name: dish.EnglishName,
                        originalName: dish.OriginalName,
                        allergens: dish.allergens,
                        description: dish.ingredients,
                        created_at: new Date().toISOString()
                    });
                });
    
                setCategories(cate);
    
                console.log(dishes)
                console.log(categories)
    
                console.log('end')
                setStatue('idle')

                // Upload dishes to Supabase
                await uploadDishesToSupabase(dishData);

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
                        <View style={styles.categoryContainer}>
                                <Chips text="All" isActive={menuFilter === 'All'} onPress={() => setMenuFilter('All')} />
                                <Chips text="No Allergen" isActive={menuFilter === 'No Allergen'} onPress={() => setMenuFilter('No Allergen')} />
                                <Chips text="May Contain Allergens" isActive={menuFilter === 'May Contain Allergens'} onPress={() => setMenuFilter('May Contain Allergens')} />
                            </View>
                            <ScrollView style={{padding:5, width:350}} showsHorizontalScrollIndicator={false} >
                            {dishes.filter(menuFilterFunction).map((dish, index) => {
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
        margin: 0,
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    categoryContainer: {
        flex: 0,
        margin: 32,
        display: "flex",
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'left',
        flexWrap: "wrap",
        gap: 10,
        marginTop: 10
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 22,
    },
    photoPreview: {
        alignSelf: 'center',
        flex: 1,
        width: 350,
        height: 20,
    },
    imageContainer:{
        flex: 0,
        margin: 32,
        marginBottom:5,
        height:125, 
        width:200 
    }
});


export default menuScannerResult;