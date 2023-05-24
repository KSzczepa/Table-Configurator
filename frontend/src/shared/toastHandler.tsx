import { toast } from "react-toastify";

export function toastsHandler(toastType: string, message?: string | string[]) {
    switch (toastType) {
        case 'PENDING': {
            const defaultMessage = 'Submitting...';
            const messageToDisplay = message ? message : defaultMessage;
            
            toast.info(messageToDisplay, {
                position: toast.POSITION.TOP_RIGHT, 
                toastId: 'pending',
                autoClose: false
            });
            break;
        }
        case 'SUCCESS': {
            const defaultMessage = 'Success!';
            const messageToDisplay = message ? message : defaultMessage;

            setTimeout(() => {
                toast.dismiss('pending');
            }, 250);

            toast.success(messageToDisplay, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;
        }
        case 'ERROR': {
            const defaultMessage = 'An error occured.';

            setTimeout(() => {
                toast.dismiss('pending');
            }, 250);
            
            toast.error(<div>{defaultMessage}<br />{message ? message : ''}</div>, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;
        }
    }
}