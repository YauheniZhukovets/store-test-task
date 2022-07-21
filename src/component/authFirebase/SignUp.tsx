import React from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {Form} from './Form';
import {useAppDispatch} from '../../hooks/redux-hooks';
import {setUser} from '../../features/auth/authReducer';
import {useNavigate} from 'react-router-dom';


export const SignUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            title={'sign up'}
            handleClick={handleRegister}
        />
    );
};
