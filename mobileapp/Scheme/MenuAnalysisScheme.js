export const MenuAnalysisScheme =  {
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