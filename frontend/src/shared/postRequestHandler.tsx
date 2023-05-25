import { orderCompleteData } from "../types/orderCompleteDataType";

export async function postFormData(data: orderCompleteData, url: string) {

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response;

}