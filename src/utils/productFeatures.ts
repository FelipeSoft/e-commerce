import { products } from "../data/products"
import { CartProduct } from "../types/CartProduct";
import { Product } from "../types/Product";

export const productFeatures = {
    getProductById: (id: number): Product | null => {
        const data = products.find(element => element.id === id);
        if (data !== undefined){
            return data;
        }
        return null;
    },
    limitCharacters: (text: string, maxLength: number): string=> {
        if (text.length > maxLength){
            return text.slice(0, maxLength - 3) + "...";
        }
        return text;
    },
    calculateTotalCartPrice: (products: Array<CartProduct>) => {
        return products.reduce((total, product) => {
            if (product.discountedPrice !== 0) {
                return total + (product.discountedPrice * product.quantity);
            } else {
                return total + (product.price * product.quantity);
            } 
        }, 0);
    }
}