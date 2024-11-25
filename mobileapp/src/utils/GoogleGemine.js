const { GoogleGenerativeAI, SchemaType } = require("@google/generative-ai");

export default function GoogleGemine() {
    const ProductAnalysisScheme = {
        type: "object",
        properties: {
            response: {
                type: "string"
            },
            allergens: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        allergen: {
                            type: "string"
                        },
                        ingredients: {
                            type: "array",
                            items: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            ingredients: {
                type: "array",
                items: {
                    type: "string"
                }
            }
        }
    };

    const MenuAnalysisScheme =  {
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
    };

    const GemineAPI = async (parts, scheme, model = "gemini-1.5-flash") => {
        const generationConfig = {
            temperature: 1,
            maxOutputTokens: 8192,
            responseMimeType: "application/json",
            responseSchema: scheme,
        }


        const EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY;
        const genAI = new GoogleGenerativeAI(EXPO_PUBLIC_GOOGLE_GEMINE_API_KEY);

        const MODEL = genAI.getGenerativeModel(
            {
                model: model, //"gemini-1.5-pro", // "gemini-1.5-flash", //
                generationConfig: generationConfig
            },
        );

        const result = await MODEL.generateContent({ contents: [{ role: "user", parts }], generationConfig });
        const resultJson = JSON.parse(result.response.text())

        return resultJson;

    }

    const productGemineAPI =  async (ingredientText, model = "gemini-1.5-flash") => {
        const prompt = "Analyze the ingredient I provide, and list the possible allery in the list (eggs, milk, mustard, peanuts, crustaceans and molluscs, fish, sesame seeds, soy, sulphites, tree nuts, wheat and triticale), " +
            " and highlight all allergy for each category. The ingredient list: " + ingredientText;

        const SCHEME = ProductAnalysisScheme;

        const parts = [
            { text: prompt },
            { text: "output:" }
        ];

        const result = await GemineAPI(parts, SCHEME, model)
        return result;
    }

    const menuGemineAPI =  (image, model = "gemini-1.5-flash") => {

        
        const SCHEME = MenuAnalysisScheme;

        const parts = [
            {
                inlineData: {
                    mimeType: "image/jpeg",
                    data: image
                }
            },
            { text: "analysis all dish that the image provided, that include the dish original name, category, list the possible allery in the list (eggs,  milk,  mustard,  peanuts,  Crustaceans and molluscs,  fish,  sesame seeds,  soy,  sulphites,  tree nuts,  wheat and triticale)  , list all ingredient in english, also translate the dish name and category to english. also please provide the original name in dish name and category " },
            { text: "output:" }
        ];
        
        const result =  GemineAPI(parts, SCHEME, model)
        return result;
    }

    return { productGemineAPI, menuGemineAPI };
}