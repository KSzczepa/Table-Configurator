import styles from './OrderForm.module.css';

import { Button, Container, FormControl, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { userDataInterface } from "../../types/userData4FormInterface";
import SendIcon from '@mui/icons-material/Send';
import { useReducer, useState } from 'react';
import { toastsHandler } from '../../shared/toastHandler';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import { productDescription } from '../../types/productDescriptionType';
import { postFormData } from '../../shared/postRequestHandler';
import { userDataReducer } from './userDataReducer/userDataReducer';
import { UPDATE_NAME, UPDATE_SURNAME, UPDATE_EMAIL } from '../../globalVariables/submitActions';

const OrderForm = () => {

    const navigate = useNavigate();

    function navigateHandler(path: string) {
        navigate(path);
    };


    const [userData, dispatchUserDataReducer] = useReducer(userDataReducer, {
        name: undefined,
        surname: undefined,
        email: undefined
    });

    const { register, handleSubmit, control, formState: { errors }, setValue, reset, resetField } =
        useForm<userDataInterface>({ mode: "onTouched" });


    const dispatch = useDispatch();

    interface OrderVisibilityState {
        isOrderFormVisible: boolean
    }

    interface CartStateInterface {
        cart: { products: productDescription[] }
    }

    const isOrderFormVisible = useSelector((state: OrderVisibilityState) => state.isOrderFormVisible);
    const cartProducts = useSelector((state: CartStateInterface) => state.cart).products;

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async () => {
        setIsSubmitting(true);

        toastsHandler('PENDING');
        const dataToPost = {
            userData: userData,
            orderedProducts: cartProducts
        }
        console.log(dataToPost);

        //Now we need to send post request and send an email
        // const response = postFormData(cartProducts, url);

        setIsSubmitting(false);
        dispatch(cartActions.onSubmitForm());
        dispatch(cartActions.onCloseCart());
        navigateHandler('/');
        clearForm();
    };

    const clearForm = () => {
        reset();
    };


    return <div className={styles.wrapper}>
        <h1>Submit your order</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container maxWidth="xs">
                <div className={styles.element}>
                    <FormControl fullWidth>
                        <TextField
                            label='name'
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}
                            variant="outlined"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "The name must contain at least 3 characters"
                                },
                            })}
                            onChange={(event) => { dispatchUserDataReducer({ type: UPDATE_NAME, payload: event.target.value }) }}
                        />
                    </FormControl>
                </div>
                <div className={styles.element}>
                    <FormControl fullWidth>
                        <TextField
                            label='surname'
                            error={Boolean(errors.surname)}
                            helperText={errors.surname?.message}
                            variant="outlined"
                            {...register("surname", {
                                required: "Surname is required",
                                minLength: {
                                    value: 3,
                                    message: "The surname must contain at least 3 characters"
                                },
                            })}
                            onChange={(event) => { dispatchUserDataReducer({ type: UPDATE_SURNAME, payload: event.target.value }) }}
                        />
                    </FormControl>
                </div>
                <div className={styles.element}>
                    <FormControl fullWidth>
                        <TextField
                            label='e-mail'
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                            variant="outlined"
                            {...register("email", {
                                required: "E-mail is required",
                                minLength: {
                                    value: 3,
                                    message: "The e-mail must contain at least 3 characters"
                                },
                            })}
                            onChange={(event) => { dispatchUserDataReducer({ type: UPDATE_EMAIL, payload: event.target.value }) }}
                        />
                    </FormControl>
                </div>

                <Button
                    className={styles.submitBtn}
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    endIcon={<SendIcon />}
                >
                    Submit
                </Button>
            </Container>
        </form>
    </div>
}

export default OrderForm;

