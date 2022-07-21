import React from 'react';
import {useFormik} from 'formik';
import {Navigate, NavLink} from 'react-router-dom';
import {PATH} from '../../app/App';
import {Button, TextField} from '@mui/material';
import {useAppSelector} from '../../hooks/redux-hooks';
import {selectIsLoggedIn, selectIsRegistered} from './selectors';
import {SignUp} from '../../component/authFirebase/SignUp';

type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string
}

export const RegisterPages = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const isRegistered = useAppSelector(selectIsRegistered)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Please enter your email Address.';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Please enter valid email address.';
            }

            if (!values.password) {
                errors.password = 'Please enter your password.';
            } else if (values.password.length < 8) {
                errors.password = 'Password length must be more than 8 characters';
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Please enter your confirm password.';
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords don\'t match.';
            }
            return errors;
        },
        onSubmit: (values) => {

        },
    })

    if (isLoggedIn) {
        return <Navigate to={PATH.CATALOG}/>
    }

    if (isRegistered) {
        return <Navigate to={PATH.LOGIN}/>
    }
    return (
        <div>
            <div>
                <div>
                </div>
                <div>
                    <h2> Sing Up</h2>
                </div>
                <SignUp/>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <label>Email</label>
                        <TextField type={'email'}
                                   placeholder={'Enter your email'}
                                   {...formik.getFieldProps('email')}
                        />
                        <label>Password</label>
                        <TextField type={'password'}
                                   placeholder={'Enter your password'}
                                   {...formik.getFieldProps('password')}
                        />
                        <label>Confirm password</label>
                        <TextField type={'password'}
                                   placeholder={'Enter your confirm password'}
                                   {...formik.getFieldProps('confirmPassword')}
                        />
                        <div>
                            <Button type={'submit'}>
                                Register
                            </Button>
                        </div>
                    </form>
                </div>
                <div>
                    <NavLink to={PATH.LOGIN}> Sign in </NavLink>
                </div>
            </div>
        </div>
    );
};