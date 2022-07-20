import React from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {Form} from './Form';
import {useAppDispatch} from '../../utils/redux-utils';

export const SignUp = () => {
    const dispatch = useAppDispatch()

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Form title={'sign up'} handleClick={handleRegister}/>
    );
};
