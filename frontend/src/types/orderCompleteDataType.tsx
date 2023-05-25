import { userDataInterface } from "./userData4FormInterface";
import { productDescription } from "./productDescriptionType";

export interface orderCompleteData {
    userData: userDataInterface;
    orderedProducts: productDescription[];
}