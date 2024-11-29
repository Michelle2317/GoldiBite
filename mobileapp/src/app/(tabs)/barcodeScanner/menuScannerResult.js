import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView, SafeAreaView, Text, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import menuAnalyistUtils from '@/src/utils/menuAnalyistUtils'
import Loading from '../../../components/animation/Loading';
import ItemList from '../../../components/scanner/ItemList';
import GoogleGemine from "@/src/utils/GoogleGemine";
import AllengyAnalysisUtils from '@/src/utils/AllengyAnalysisUtils';
import UserStoreDataUtils from '@/src/utils/UserStoreDataUtils';
import { Chip } from 'react-native-paper';
import sampleData from '@/src/data/sampleData'
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

    
    const menuFilterFunction = (item)=> {
        return menuFilter=="All" || menuFilter == item.EnglishCategory
    }

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
                setImage(iData);
                const res = await menuGemineAPI(iData, "gemini-1.5-pro");

             
                //const res = sampleData;
                //console.log(typeof(res))

                const cate = [];
                res.dishes.forEach(dish => {
                    setDishes(data => [...data, dish]);
                    if(dish.EnglishCategory == ""){
                        if(cate.indexOf("None") < 0)  cate.push("None");
                    }else{ 
                        if(cate.indexOf(dish.EnglishCategory) < 0) cate.push ( dish.EnglishCategory);
                    }
                });
                setCategories(cate);

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
                    <View style={styles.imageContainer} >
                        <Image style={styles.photoPreview} source={{ uri: "data:image/jpg;base64," +image   }} />
                        </View>
                        <View style={styles.categoryContainer}>
                            <Chip theme={{ colors: { secondaryContainer: '#FFC858' } }} mode='flat' onPress={()=>setMenuFilter('All')} selected={true}> All </Chip>
                            {categories.map((item, index) => {
                                return (
                                    <Chip key={index} theme={{ colors: { secondaryContainer: '#FFC858' } }} mode='flat'  onPress={()=>setMenuFilter(item)} selected={true}> {item} </Chip>
                                )
                            })}
                        </View>
                        <ScrollView style={{ flex: 1 }}>
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
        display:"flex",
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'left',
        flexWrap: "wrap",
        gap: 10,
        marginTop:10
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