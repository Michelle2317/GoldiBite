import products from '@/src/data/barcode.json';

export default function ProductUtils(){


    const getProduct = (barcode) =>{
        const filtered = products.filter((product) => product.barcode == barcode)
        return filtered;
    }

    return getProduct;
}