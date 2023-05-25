import { productDescription } from "./productDescriptionType";

export interface cartStateInterface {
    products: productDescription[];
    isEmpty: boolean;
    totalItems: number;
    totalPrice: number;
    isCartVisible: boolean;
    isOrderFormVisible: boolean;
}