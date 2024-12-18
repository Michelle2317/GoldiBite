import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView,  Text,  } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import menuAnalyistUtils from '@/src/utils/menuAnalyistUtils'
import Loading from '../../../components/animation/Loading';
const { GoogleGenerativeAI } = require("@google/generative-ai");
import ItemList from '../../../components/scanner/ItemList';

const menuScannerResultTim = () => {
    const { image } = useLocalSearchParams(image);
    const [status, setStatue] = useState('idle');

    const isLoading = status === 'loading';

    const isError = status === 'error';
    const { getImageBase64, storeImageBase64 } = menuAnalyistUtils();

    const [dishes, setDishes] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(() => {


        const GemineAPI = async () => {
            // Make sure to include these imports:
            // import { GoogleGenerativeAI } from "@google/generative-ai";
            try {
                setStatue('loading')
                const generationConfig = {
                    temperature: 1,
                    topP: 0.95,
                    topK: 40,
                    maxOutputTokens: 8192,
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: "object",
                        properties: {
                            response: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },
                            dishes: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        EnglishName: {
                                            type: "string"
                                        },
                                        OriginalName: {
                                            type: "string"
                                        },
                                        EnglishCategory: {
                                            type: "string"
                                        },
                                        OriginalCategory: {
                                            type: "string"
                                        },
                                        ingredients: {
                                            type: "array",
                                            items: {
                                                type: "string"
                                            }
                                        },
                                        allergens: {
                                            type: "array",
                                            items: {
                                                type: "string"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        required: [
                            "response"
                        ]
                    },
                };

                const EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY;
                const genAI = new GoogleGenerativeAI(EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY);
                const model = genAI.getGenerativeModel(
                    {
                        model: "gemini-1.5-pro", //"gemini-1.5-flash",
                        generationConfig: {
                            responseMimeType: "application/json",
                        },
                    },
                );

                let iData = await getImageBase64();
                const parts = [
                    {
                        inlineData: {
                            mimeType: "image/jpeg",
                            data: iData
                        }
                    },
                    //{ text: "list all dish in the image,analysis all dish that the image provided, list all ingredient, and possibile allergyen that include the dish original name, category. list the possible allery in the list (eggs,  milk,  mustard,  peanuts,  Crustaceans and molluscs,  fish,  sesame seeds,  soy,  sulphites,  tree nuts,  wheat and triticale), and list all ingredient in english, also translate the dish name and category to english. " },
                    { text: "analysis all dish that the image provided, that include the dish original name, category, list the possible allery in the list (eggs,  milk,  mustard,  peanuts,  Crustaceans and molluscs,  fish,  sesame seeds,  soy,  sulphites,  tree nuts,  wheat and triticale)  , list all ingredient in english, also translate the dish name and category to english. also please provide the original name in dish name and category " },

                    //{text: "analysis the images I provided."},

                    { text: "output:" }
                ];
                console.log(parts)
                const result = await model.generateContent({ contents: [{ role: "user", parts }], generationConfig });
                const response = await result.response;
                const res = JSON.parse(response.text())

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

        GemineAPI()
    }, []);

    return (<>
        <View style={styles.container}>

            {isLoading ? <Loading />
                : isError ? <Text>Error while loading data</Text>
                    : (<>
                        <ScrollView style={{flex: 1}}>
                             {dishes.map((dish, index) => {
                                console.log(dish);
                                return (
                                    <ItemList key={index} dish={dish} />
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
    photoPreview: {
        alignSelf: 'stretch',
        flex: 1, 
        marginBottom:10
    }
});


export default menuScannerResultTim;