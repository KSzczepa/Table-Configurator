import { userDataInterface } from "../../../types/userData4FormInterface";
import { UPDATE_NAME, UPDATE_SURNAME, UPDATE_EMAIL } from '../../../globalVariables/submitActions';

interface actionInterface {
    type: string;
    payload: string;
}

const initialState: userDataInterface = {
    name: undefined,
    surname: undefined,
    email: undefined,
};

export const userDataReducer = (state = initialState, action: actionInterface) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            };
        case UPDATE_SURNAME:
            return {
                ...state,
                surname: action.payload
            };
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        default:
            return state;
    }
};
