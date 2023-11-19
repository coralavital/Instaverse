import * as api from '../api';
import { AUTHENTICATION } from '../constants/actionType';

const signup = (formValues, navigate) => async dispatch => {
    try {
        const { data } = await api.singup(formValues);
        dispatch({ type: AUTHENTICATION, payload: data });
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}
const login = (formValues, navigate) => async dispatch => {
    try {
        const { data } = await api.singup(formValues);
        dispatch({ type: AUTHENTICATION, payload: data });
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export { signup, login };