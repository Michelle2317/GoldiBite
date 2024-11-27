export default function AllengyAnalysisUtils() {
    const checkAllergy = (userAllergy, productAllergy) => {

        for (const item of productAllergy) {
            if (userAllergy
                .filter((allergyItem) => allergyItem.selected == true)
                .filter((allergiesItem) => (allergiesItem.name.toUpperCase() == item.allergen.toUpperCase()))
                .length > 0) {
                    console.log('123')
                return false;
            }
          }

        return true;
    }

    const checkMenuAllergy = (userAllergy, productAllergy) => {

        for(const allergy of productAllergy){
            if (userAllergy
                .filter((allergyItem) => allergyItem.selected == true)
                .filter((allergiesItem) => (allergiesItem.name.toUpperCase() == allergy.toUpperCase()))
                .length > 0) {
                return false;
            }
        }
        return true;
    }

    return { checkAllergy, checkMenuAllergy }
}