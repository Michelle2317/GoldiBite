import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView, Text } from 'react-native';
import { Chip, IconButton } from 'react-native-paper';
import menuAnalyistUtils from '@/src/utils/menuAnalyistUtils';
import GoogleGemine from "@/src/utils/GoogleGemine";
import AllengyAnalysisUtils from '@/src/utils/AllengyAnalysisUtils';
import UserStoreDataUtils from '@/src/utils/UserStoreDataUtils';
<<<<<<< Updated upstream
import Chips from '../../../components/barcodeScanner/Chips'; 
import sampleData from '@/src/data/sampleData'
import supabase from '@/src/utils/supabaseClient';  
=======
import Loading from '../../../components/animation/Loading';
import ItemList from '../../../components/scanner/ItemList';
import EmergencyPopup from '@/src/components/EmergencyPopup';
>>>>>>> Stashed changes

const menuScannerResult = () => {
    const [image, setImage] = useState();
    const [status, setStatue] = useState('idle');
    const [dishes, setDishes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [profile, setProfile] = useState({});
    const [menuFilter, setMenuFilter] = useState("All");
    const [visible, setVisible] = useState(false);

    const isLoading = status === 'loading';
    const isError = status === 'error';

    const { getImageBase64 } = menuAnalyistUtils();
    const { menuGemineAPI } = GoogleGemine();
    const { getProfile } = UserStoreDataUtils();
    const { checkMenuAllergy } = AllengyAnalysisUtils();

    const popupTitle = "Notice";
    const popupBody = "The information provided by the barcode scanner and menu scanner is gathered with the assistance of AI and machine learning and it can make mistakes. Check suspicious information.";

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

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
        return menuFilter === "All" || menuFilter === item.EnglishCategory;
    };

    useEffect(() => {
        const callGetProfile = async () => {
            const user = await getProfile();
            setProfile(user);
<<<<<<< Updated upstream
        }

    
        const GemineAPI = async () => {
            try {
                setStatue('loading')
    
=======
        };

        const GemineAPI = async () => {
            try {
                setStatue('loading');
>>>>>>> Stashed changes
                let iData = await getImageBase64();
                setImage(iData);
                const res = await menuGemineAPI(iData, "gemini-1.5-pro");
    

<<<<<<< Updated upstream
                //const res = sampleData;
                //console.log(typeof(res))

                const cate = [];
                const dishData = [];
    
                res.dishes.forEach((dish) => {
                    setDishes((data) => [...data, dish]);
=======
                const cate = [];
                res.dishes.forEach(dish => {
                    setDishes(data => [...data, dish]);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    
                console.log(dishes)
                console.log(categories)
    
                console.log('end')
                setStatue('idle')

                // Upload dishes to Supabase
                await uploadDishesToSupabase(dishData);

=======
                setStatue('idle');
>>>>>>> Stashed changes
            } catch (e) {
                setStatue('error');
                console.error(e.message);
            }
        };
        callGetProfile();
        GemineAPI();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <IconButton
                    icon="information-outline"
                    size={35}
                    onPress={showDialog}
                    color="black"
                    style={styles.informationButton}
                />
                <EmergencyPopup
                    visible={visible}
                    hideDialog={hideDialog}
                    title={popupTitle}
                    body={popupBody}
                />
                {isLoading ? <Loading />
                    : isError ? <Text>Error while loading data</Text>
                        : (
                            <>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.photoPreview} source={{ uri: "data:image/jpg;base64," + image }} />
                                </View>
                                <View style={styles.categoryContainer}>
                                    <Chip theme={{ colors: { secondaryContainer: '#FFC858' } }} mode="flat" onPress={() => setMenuFilter('All')} selected={true}> All </Chip>
                                    {categories.map((item, index) => (
                                        <Chip 
                                            key={index} 
                                            theme={{ colors: { secondaryContainer: '#FFC858' } }} 
                                            mode="flat" 
                                            onPress={() => setMenuFilter(item)} 
                                            selected={true}
                                        >
                                            {item}
                                        </Chip>
                                    ))}
                                </View>
                                <ScrollView style={{ flex: 1 }}>
                                    {dishes.filter(menuFilterFunction).map((dish, index) => {
                                        let isSafity = checkMenuAllergy(profile.allergies, dish.allergens);
                                        dish.safity = isSafity;
                                        return (
                                            <ItemList 
                                                key={index} 
                                                dish={dish} 
                                                safity={isSafity} 
                                                alertAllergies={profile.allergies} 
                                            />
                                        );
                                    })}
                                </ScrollView>
                            </>
                        )}
            </View>
        </>
    );
};

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
    imageContainer: {
        flex: 0,
        margin: 32,
        marginBottom: 5,
        height: 125,
        width: 200
    },
    informationButton: {
        position: 'absolute',
        top: -15,
        right: 15,
    },
});

export default menuScannerResult;
