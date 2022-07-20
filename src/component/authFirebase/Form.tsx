import React, {ChangeEvent, useState} from 'react';


type FormPropsType = {
    title: string
    handleClick: (email: string, password: string) => void
}

export const Form = ({title, handleClick}: FormPropsType) => {

    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onChangePassHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
    }

    return (
        <div>
            <input value={email}
                   type="email"
                   onChange={onChangeEmailHandler}
                   placeholder="Email"
            />
            <input value={pass}
                   type="password"
                   onChange={onChangePassHandler}
                   placeholder="Password"
            />
            <button
                onClick={() => handleClick(email,pass)}
            >
                {title}
            </button>
        </div>
    );
};
