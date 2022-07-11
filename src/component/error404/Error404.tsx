import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Error404.module.css'
import img404 from './error404.png'
import {Button} from '@mui/material';

export function Error404() {
    return (
        <div className={s.errorBlock}>
            <div className={s.nameContainer}>
                <h2 className={s.nameText}>
                    <span>N</span>
                    <span>o</span>
                    <span>t&nbsp;&nbsp;</span>
                    <span>F</span>
                    <span>o</span>
                    <span>u</span>
                    <span>n</span>
                    <span>d</span>
                </h2>
            </div>
            <div className={s.btnBox}>
                <Button>
                    <NavLink to={'/'}>
                        Go to homepage
                    </NavLink>
                </Button>

            </div>
            <img src={img404} alt="404"/>
        </div>
    )
}


