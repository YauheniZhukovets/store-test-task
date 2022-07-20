import React from 'react';
import {useAppDispatch} from '../../utils/redux-utils';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {Form} from './Form';

export const Login = () => {
    const dispatch = useAppDispatch()

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Form title={'sign in'} handleClick={handleLogin}/>
    )
}