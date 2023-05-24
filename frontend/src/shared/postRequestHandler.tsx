import { orderFormFields } from "../types/orderFormFieldsTypes";


export async function postFormData(data: orderFormFields, url: string) {

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response;

}