import styles from './OrderForm.module.css';

import { Button, Container, FormControl, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { orderFormFields } from "../../types/orderFormFieldsTypes";
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { toastsHandler } from '../../shared/toastHandler';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

const OrderForm = () => {

    const navigate = useNavigate();

    function navigateHandler(path: string) {
        navigate(path);
    };

    const { register, handleSubmit, control, formState: { errors }, setValue, reset, resetField } =
        useForm<orderFormFields>({ mode: "onTouched" });

    const dispatch = useDispatch();

    interface OrderVisibilityState {
        isOrderFormVisible: boolean
    }

    const orderFormSelector = (state: OrderVisibilityState) => state.isOrderFormVisible;   
    const isOrderFormVisible = useSelector(orderFormSelector);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async () => {
        setIsSubmitting(true);

        toastsHandler('PENDING');

        //Now we need to send post request and send an email

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

