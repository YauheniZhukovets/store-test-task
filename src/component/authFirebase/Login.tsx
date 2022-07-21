import React from 'react';
import {useAppDispatch} from '../../hooks/redux-hooks';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {Form} from './Form';
import {setUser} from '../../features/auth/authReducer';
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Form
            title={'sign in'}
            handleClick={handleLogin}
        />
    )
}